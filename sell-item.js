const template = document.createElement("template");
template.innerHTML = /*html*/`
<style>
</style>
  <div class='sell-item'>
    <img class='image' src="">
    <div>Price: $<span class='price'>Price</span></div> 
    <div>Offer: <span class='offer'>Offer</span></div> 
    <div>Discount: <span class='discount'>Discount</span>%</div> 
    <div>Product: <span class='title'>Title</span></div> 
    <div>Rating: <span class='rating'>Rating</span> stars</div> 
  </div>
`

class SellItem extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({"mode": "open"});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes () {
    return ["image", "price", "offer", "discount", "title", "rating", 
    //"visible"
  ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "image") {
      this.shadowRoot.querySelector(".image").src = newValue;
    } else if (name === "price") {
      this.shadowRoot.querySelector(".price").textContent = newValue;
    } else if (name === "offer") {
      this.shadowRoot.querySelector(".offer").textContent = newValue;
    } else if (name === "discount") {
      this.shadowRoot.querySelector(".discount").textContent = newValue;
    } else if (name === "title") {
      this.shadowRoot.querySelector(".title").textContent = newValue;
    } else if (name === "rating") {
      this.shadowRoot.querySelector(".rating").textContent = newValue;
    } 
  }
}


window.customElements.define("sell-item", SellItem);