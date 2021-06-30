const template = document.createElement("template");
template.innerHTML = /*html*/`
<style>
  .sell-item {
    padding: 24px 0px; 
  }
  .card {
    display: flex;
    max-width: 28rem;
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
        <div class='product'>Product: <span class='title'>Title</span></div> 
        <div>Price: $<span class='price'>Price</span></div> 
        <div>- <span class='discount'>Discount</span>%</div> 
        <div>Offer: <span class='offer'>Offer</span></div> 
        <div class='rating-stars'>
          Rating: <span class='rating'>Rating</span> stars
          <svg class="star-selected" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
          </svg>
          <svg class="star-unselected" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
          </svg>
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