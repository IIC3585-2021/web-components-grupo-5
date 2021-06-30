const template = document.createElement("template");
template.innerHTML = /*html*/`
<style>
  .sell-item {
    padding: 24px 0px; 
    margin: 10px auto;
  }
  .card {
    display: flex;
    width: 350px;
    height: 120px;
    background-color: white;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .image {
    width: 33.333333%;
    background-size: cover;
  }
  .info-container {
    width: 66.666667%;
    padding: 16px;
  }
  .product {
    --tw-text-opacity: 1;
    color: rgba(17, 24, 39, var(--tw-text-opacity));
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .title-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .discount-container {
    color: red;
    font-size: 2rem;
    line-height: 2rem;
  }
  .price-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .price {
    text-decoration: line-through;
  }
  .offer {
    font-weight: 700;
    margin-left: 4px;
  }
  .rating-stars {
    align-items: center;
  }
  .star-selected {
    width: 20px;
    height: 20px;
    fill: currentColor;
    --tw-text-opacity: 1;
    color: rgba(55, 65, 81, var(--tw-text-opacity));
  }
  .star-unselected {
    width: 20px;
    height: 20px;
    fill: currentColor;
    --tw-text-opacity: 1;
    color: rgba(209, 213, 219, var(--tw-text-opacity));
  }
</style>
  <div class='sell-item'>
    <div class="card">
      <img class='image' src="">
      <div class='info-container'>
        <div class="title-container">
          <div class='product'><span class='title'>Title</span></div> 
          <div class='discount-container'>- <span class='discount'>Discount</span>%</div> 
        </div>
        <div class="price-container">
          <div class="old-price-container">Price: $<span class='price'>Price</span></div> 
          <div><span class='offer'>Offer</span></div> 
        </div>
        <div class='rating-stars' id='rating-stars'>
          Rating: <span class='rating'>Rating</span> stars
        </div> 
      </div>
    </div>
  </div>
`

class SellItem extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({"mode": "open"});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes () {
    return ["image", "price", "offer", "discount", "title", "rating"];
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