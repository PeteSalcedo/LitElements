 
export class Characters{
	constructor(){
	this.path = 'https://swapi.co/api/people/'
	}
  async getUsers(){
	const data = await fetch(this.path);
	  return await data.json();
  }
}