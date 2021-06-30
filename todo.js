const template = document.createElement("template")
template.innerHTML = /*html*/`
<style>
    /*span {
        cursor: pointer;
    }
    .list {
        width: 400px;
    }
    .item, .agregar {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .item {
        margin-left: 25px;
    }
    .nuevo-item {
        border: 1px solid #999;
        border-bottom: 1px solid #444;
        flex: 1;
        padding: 5px;
        margin-left: 7px;
    }
    .input {
        display: flex;
        align-items: center;
    }
    .tachado {
        text-decoration: line-through;
    }*/
</style>
<div class="list">
    <h3 class="title"></h3>
    <div class="list-wrapper"></div>
    <div >
        <div class="input">Add new item: <input type="text" class="new-item"> </div>
        <span class="add">add</span>
    </div>
</div>`


class ToDo extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({"mode": "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true)); 
    }

    static get observedAttributes() {
        return ["title"]
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "title") {
          this.shadowRoot.querySelector(".title").textContent = newValue;
        } 
    }

    addElement(value, wrapper, i){
        const newRow = document.createElement("div");
        newRow.className = "item";
        newRow.id = "item" +  i;
        newRow.innerHTML = value  + '<span class="delete">X</span>' + '<span class="done">Done</span>'
        
        wrapper.appendChild(newRow)

        // Onclick -> delete 
        newRow.querySelector(".delete").addEventListener("click", () => {
                newRow.parentNode.removeChild(newRow);
                this.removeAttribute("item" + i);
            })

        // Onclick -> done
        newRow.querySelector(".done").addEventListener("click", () => {
            if (!newRow.className.includes("tachado")){
                newRow.className += " tachado";
            }else{
                newRow.className = "item"
            }
        })
    }
    connectedCallback() {
        let iter = 1;
        let item = this.getAttribute("item1");
        const wrapper = this.shadowRoot.querySelector(".list-wrapper");

        // Existing items (initialization attributes)
        while (item !== null) {
            this.addElement(item, wrapper, iter)
            iter += 1
            item = this.getAttribute("item" +  iter);
        };

        // New Items
        this.shadowRoot.querySelector(".add").addEventListener("click",  (e) => {
            const content = this.shadowRoot.querySelector(".new-item");
            if (content.value === ""){
                alert("new task field is empty :(");
            } else {
                this.addElement(content.value, wrapper, iter)
                content.value = "";
                iter += 1
            }
    })
    }
}
window.customElements.define("todo-app", ToDo);