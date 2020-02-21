import {
    LitElement,
    html,
    css
} from 'lit-element';

import './parent-component'

class ChildComponent extends LitElement {
    static get properties() {
        return {
        mensajeDelPadre: {type: String},
        changeToRed:  {type:String}
        }
    }
    constructor() {
        super()
        this.changeToRed = 'red';
        this.changeToGreen='green';
    }
    render() {
        return html `
        <h2>Child Component</h2>
        <h2 > ${this.mensajeDelPadre}</h2>
        
        <input type="text" .value="${this.mensajeDelPadre}" @input="${this.inputMethod}">

        <button @click="${this.eventPushMe}" id="button-green" .value="${this.changeToGreen}">Green</button>


        <button id="button-red">Red</button>
        <button id="button-blue">Blue</button>
        `;
    }
    static get styles() {
        return css `
          :host{
              display: block;
              background-color: lightgreen;
              padding: 8px;
              text-align:center;
        }
        #button-green{
          background-color: green; /* Green */
          padding: 14px 28px;
          font-size: 16px;
          cursor: pointer;
          text-align: center;
          display: block;
          width: 100%;
          border: none;
          color:white;
        }
        #button-red{
          background-color: red;
          padding: 14px 28px;
          font-size: 16px;
          cursor: pointer;
          text-align: center;
          display: block;
          width: 100%;
          border: none;
          color:white;
          }
        #button-blue{
            background-color: Blue;
            padding: 14px 28px;
            font-size: 16px;
            cursor: pointer;
            text-align: center;
            display: block;
            width: 100%;
            border: none;
            color:white;
          }
        `;
    }
    inputMethod(event){
      this.mensajeDelPadre = event.target.value
    }
    eventPushMe(event) {
        console.log(event)
      }
    
}
customElements.define('child-component', ChildComponent)