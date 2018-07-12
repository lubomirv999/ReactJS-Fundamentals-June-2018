import React, { Component } from 'react'
import AddPokemonForm from './AddPokemonForm';
import Pokemon from './Pokemon';

class LoggedInScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokeArray: []
        };

        this.updateRoster = this.updateRoster.bind(this);
    }

    updateRoster(newRoster) {
        this.setState({ pokeArray: newRoster });
    }

    componentDidMount() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(rawData => rawData.json())
            .then(response => this.setState({ pokeArray: response.pokemonColection }));
    }

    render() {
        return (
            <div>
                <AddPokemonForm updateRoster={this.updateRoster}/>
                {this.state.pokeArray.map((pokemon, index) => <Pokemon key={index} item={pokemon} />)}
            </div>
        )
    }
}

export default LoggedInScreen;