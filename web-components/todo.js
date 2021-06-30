const template = document.createElement("template")
template.innerHTML = /*html*/`
<style>
    .main-container {
      padding: 10px 40px;
      display: flex;
      flex-direction: column;
      background-color: azure;
      margin: 20px auto;
      justify-content: space-evenly;
      overflow: scroll;
      width: 25%;
      height: auto;
    }
    .title {
        margin: 0px auto;
        margin-bottom: 10px;
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
    .add {
        width: 15%;
        background-color: lightblue;
        border: solid 2px lightblue;
        border-radius: 0.25rem;
    }
    .list-container {
        width: 100%;
        --tw-bg-opacity: 1;
        background-color: rgba(199, 210, 254, var(--tw-bg-opacity));
        border-radius: 0.25rem;
        padding: 10px;
        margin-bottom: 10px;
    }
    .item {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: space-between;
    }
    .delete {
        width: 16px;
        height: 16px;
        margin-left: 10px;
        background-color: red;
        border-radius: 9999px;
        align-items: center;
        justify-items: stretch;
        display: flex;
    }
    .delete-cross {
        margin-left: 4px;
    }
    .tachado {
        text-decoration: line-through;
        font-style: italic;
</style>
<div class="main-container">
    <h3 class="title"></h3>
    <div class="new-item-container">
        <div class="input">Add new item:</div>
        <div class="input-container">
            <input type="text" class="new-item"/>
            <button class="add">add</button>
        </div>
    </div>
    <div class="list-container">
        <div class="list-wrapper"></div>
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
        newRow.innerHTML = `<span class=value>${value}</span>` + '<div class="delete"><span class="delete-cross">x</span></div>'
        
        wrapper.appendChild(newRow)

        // Onclick -> delete 
        newRow.querySelector(".delete").addEventListener("click", () => {
                newRow.parentNode.removeChild(newRow);
                this.removeAttribute("item" + i);
            })

        // Onclick -> done
        newRow.querySelector(".value").addEventListener("click", () => {
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