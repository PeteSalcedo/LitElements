import {
  LitElement,
  html,
  css
} from 'lit-element';

class Alphabet{
  static get properties(){
    return{
      word:{type:String},
      wrongAttempts:{type:Number},
      alphabet:{type:Array}
    }
  }

  constructor(){
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.generateAlphabet();
    this.wrongAttempts=0;
  }
  render(){
  return html `
  <h2>wrongAttempts: ${this.wrongAttempts}</h2>
  `
  }
  generateAlphabet(){
  var buttons = function () {
  myButtons = document.getElementById('buttons');
  letters = document.createElement('ul');

  for (var i = 0; i < alphabet.length; i++) {
    letters.id = 'alphabet';
    list = document.createElement('li');
    list.id = 'letter';
    list.innerHTML = alphabet[i];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
   }
  }
 }
}

customElements.define('alphabet-component',Alphabet)
