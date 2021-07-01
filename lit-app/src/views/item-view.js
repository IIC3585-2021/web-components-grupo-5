import { LitElement, html } from 'lit-element'; 
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';
  
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
            <div class='sell-item'>
                <p> Item List</p>
                <div class="card">
                    <h3 class="title">Title: ${this.title}</h3>
                    <h3 class="raiting">Rating: ${this.rating}</h3>
                    <h3 class="discount">Discount: ${this.discount}</h3>   
                    <h3 class="offer">Offer: ${this.offer}</h3>
                    <h3 class="price">Price: ${this.price}</h3>
                    <h3 class="image">${this.image}</h3>
                </div>
            </div>
        `;
    }
    
}

customElements.define('item-view', ItemView); //