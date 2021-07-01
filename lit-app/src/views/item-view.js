import { LitElement, html } from 'lit-element'; 
  
class ItemView extends LitElement { 
    static get properties() { 
        return {
          title: { type: String },
          rating: { type: String },
          discount: { type: String },
          offer: { type: String },
          price: { type: String },
          image: { type: String }
        };
    }
    constructor() { 
        super();
        this.title = '';
        this.rating = '';
        this.discount = '';
        this.offer = '';
        this.price = '';
        this.image = '';
    }
    render() {
        return html`
            <style>
                .sell-item {
                    padding: 24px 0px; 
                    margin: 10px auto;
                }
                .card {
                    display: flex;
                    width: 400px;
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
            </style>
            <div class='sell-item'>
                <div class="card">
                    <img class="image" src=${this.image}/>
                    <div class='info-container'>
                        <div class="title-container">
                            <div class="product"><span class="title">${this.title}</span></div>
                            <div class='discount-container'>-<span class="discount">${this.discount}</span>%</div>
                        </div>   
                        <div class="price-container">
                            <div class="old-price-container">$<span class="price">${this.price}</span></div>
                            <div><span class="offer">${this.offer}</span></div>
                        </div>
                        <div class="rating-stars" id="rating-stars">
                        Rating: <span class="raiting">${this.rating}</span> stars
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
}

customElements.define('item-view', ItemView); //