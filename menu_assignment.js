/*Menu driven app using prompts that manages pokemon teams and the pokemon on those teams */


/*Creates a pokemon class and describes their type */
class PokemonClass {
    constructor(pokemonName, pokemonType) {
        this.pokemonName = pokemonName;
        this.pokemonType = pokemonType;
    }

    describe() {
        return `${this.pokemonName} is a ${this.pokemonType} type.`
    }
}

/*Creates a pokemon team class */
class PokemonTeam {
    constructor(teamName) {
        this.teamName = teamName;
        this.pokemons = [];
    }

/*Method to add Pokemon */
addPokemon(pokemon) {
    if (pokemon instanceof PokemonClass) {
        this.pokemons.push(pokemon);
    } else {
        throw new Error(`You can only add a pokemon. Arguement is not a pokemon: ${pokemon}`);
    }
}

describe() {
    return `${this.teamName} has ${this.pokemons.length} pokemon.`;
    }
}

/*Menu Class that drives application and choices*/

class Menu {
    constructor() {
        this.pokemonTeams = []
        this.selectedTeam = null;
    }

    /*Starts the menu application */
    start(){
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createPokemonTeam();
                    break;
                case '2':
                    this.viewPokemonTeam();
                    break;
                case '3':
                    this.deletePokemonTeam();
                    break;
                case '4':
                    this.displayPokemonTeam();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye Trainer!');
    }

/*This is the prompt menu option */
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new pokemon team
        2) view pokemon team
        3) delete pokemon team
        4) display all pokemon teams
        `);
    }

    showPokemonMenuOptions(pokemonInfo) {
        return prompt(`
        0) back
        1) create pokemon
        2) delete pokemon
        -------------------
        ${pokemonInfo}
        `);
    }

    displayPokemonTeam() {
        let teamString = '';
        for (let i = 0; i < this.pokemonTeams.length; i++) {
            teamString += i + ') ' + this.pokemonTeams[i].teamName + '\n';
        }
        alert(teamString);
    }

    createPokemonTeam() {
        let teamName = prompt('Enter a new Pokemon team name:');
        this.pokemonTeams.push(new PokemonTeam(teamName));
    }

    viewPokemonTeam() {
        let index = prompt('Enter the index of the Pokemon team you wish to view:');
        if (index > -1 && index < this.pokemonTeams.length) {
            this.selectedTeam = this.pokemonTeams[index];
            let description = 'Pokemon Team Name: ' + this.selectedTeam.teamName + '\n';
            
            for (let i = 0; i < this.selectedTeam.pokemons.length; i++) {
                description += i + ') ' + this.selectedTeam.pokemons[i].pokemonName
                 + ' - ' + this.selectedTeam.pokemons[i].pokemonType + '\n';
            }

            let selection = this.showPokemonMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPokemon();
                    break;
                case '2':
                    this.deletePokemon();
            }  
        }
    }

    deletePokemonTeam() {
        let index = prompt('Enter the index of the Pokemon Team you wish to delete:');
        if (index > -1 && index < this.pokemonTeams.length) {
            this.pokemonTeams.splice(index, 1);
        }
    }

    createPokemon() {
        let pokemonName = prompt('Enter name to add a new pokemon:');
        let pokemonType = prompt('Enter type for the new pokemon:')
        this.selectedTeam.pokemons.push(new PokemonClass(pokemonName, pokemonType));
    }

    deletePokemon(){
        let index = prompt('Enter the index of the pokemon you wish to delete:');
        if (index > -1 && index < this.selectedTeam.pokemons.length) {
            this.selectedTeam.pokemons.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();