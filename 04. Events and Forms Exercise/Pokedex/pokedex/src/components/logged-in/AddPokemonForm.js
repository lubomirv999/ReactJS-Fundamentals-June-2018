import React, { Component } from 'react'

class AddPokemonForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const name = e.target.dataset.name;
        const value = e.target.value;
        const newObj = {};
        newObj[name] = value;

        this.setState({
            form: Object.assign(this.state.form, newObj)
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch(
            'http://localhost:5000/pokedex/create',
            {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json())
            .then(response => {
                this.props.updateRoster(response);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <form>
                <h1>Create Pokemon</h1>
                <div className="form-group">
                    <label htmlFor="input-pokename">Pokemon name</label>
                    <input type="text" data-name="pokemonName" onChange={this.handleChange} className="form-control" id="input-pokename" aria-describedby="pokename" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="input-pokeImg">Image Url</label>
                    <input type="text" data-name="pokemonImg" onChange={this.handleChange} className="form-control" id="input-pokeImg" placeholder="Enter Image Url" />
                </div>
                <div className="form-group">
                    <label htmlFor="input-info">Info</label>
                    <input type="text" data-name="pokemonInfo" onChange={this.handleChange} className="form-control" id="input-info" placeholder="Enter Info" />
                </div>
                <button className="btn btn-primary" type='button' onClick={this.handleSubmit}>Submit</button>
            </form >
        )
    }
}

export default AddPokemonForm;