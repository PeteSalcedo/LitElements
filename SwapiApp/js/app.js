import {
    Characters
} from './names'

class StarWars {
    constructor() {
        this.characters = new Characters
        this.getPeople()
        this.getInfoForActors()
    }
    getPeople() {
        this.characters.getUsers().then(data => data.results.forEach(this.printToDOM))
    }
    printToDOM(data) {
        let card = `
            <div class="card">
            <li class="active">
             <a href="#" menu="users">${data.name}</a>
            </li>
             </div>
             
  `
        let div = document.createElement('div');
        div.innerHTML = card
        document.querySelector('.vertical-menu').appendChild(div);
        document.getElementsByClassName('.actors').innerHTML = data.name
    }
    getInfoForActors() {
        this.characters.getUsers().then(data => data.results.forEach(item => console.log(item.height)))
    }
    printActorsInfo(data) {
        let infoCard = `
            <div class="infoCard">
            <a href id="name" class="name">${data.name}</a>
            <span class="height">
            </div>
    `
    }

}

const peter = new StarWars