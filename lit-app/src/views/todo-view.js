import { LitElement, html } from 'lit-element'; 
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';
  
class TodoView extends LitElement { 
    static get properties() { 
        return {
          todos: { type: Array },
          task: { type: String }
        };
    }
    constructor() { 
        super();
        this.todos = [];
        this.task = '';
    }
    render() {
        return html`
            <style>
                .title {
                    margin: 0px auto;
                    margin-bottom: 10px;
                }
                .input-layout {
                    margin-bottom: 10px;
                    display: flex;
                    flex-direction: row;
                    align-items: start;
                    justify-content: space-between;
                }
                .new-item-container {
                    margin-bottom: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .input-container {
                    margin-bottom: 10px;
                    display: flex;
                    flex-direction: row;
                    align-items: start;
                    justify-content: space-between;
                }
                .new-item {
                    width: 80%;
                }
                .todos-list {
                    width: 100%;
                    --tw-bg-opacity: 1;
                    background-color: rgba(199, 210, 254, var(--tw-bg-opacity));
                    border-radius: 0.25rem;
                    padding: 10px;
                    margin-bottom: 10px;
                }
            </style>
            <h3 class="title"> Lista de cosas por hacer </h3>
            <div class="new-item-container"
                @keyup="${this.shortcutListener}"> 
                <div class="inputLabel">Add new item:</div>
                <div class="input-container">
                    <vaadin-text-field
                        placeholder="Task"
                        value="${this.task}" 
                        @change="${this.updateTask}"> 
                    </vaadin-text-field>
                    <vaadin-button
                        theme="primary"
                        @click="${this.addTodo}"> 
                        Add
                    </vaadin-button>
                </div>
            </div>
            <div class="todos-list">
                ${this.todos.map(
                    todo => html` 
                        <div class="todo-item">
                            <vaadin-checkbox
                                ?checked="${todo.complete}" 
                                @change="${ e => this.updateTodoStatus(todo, e.target.checked)}"> 
                                ${todo.task}
                            </vaadin-checkbox>
                        </div>
                    `
                )}
            </div>
            <vaadin-button
                @click="${this.clearCompleted}"> 
                Clear completed
            </vaadin-button>
        `;
    }
    addTodo() {
        if (this.task) {
          this.todos = [...this.todos, { 
              task: this.task,
              complete: false
          }];
          this.task = ''; 
        }
    }
    
    shortcutListener(e) {
        if (e.key === 'Enter') { 
          this.addTodo();
        }
    }
    
    updateTask(e) {
        this.task = e.target.value; 
    }

    updateTodoStatus(updatedTodo, complete) {
        this.todos = this.todos.map(todo =>
          updatedTodo === todo ? { ...updatedTodo, complete } : todo
        );
    }
    
    clearCompleted() { 
        this.todos = this.todos.filter(todo => !todo.complete);
    }
    
}

customElements.define('todo-view', TodoView); //