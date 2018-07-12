import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.item.pokemonName}</h1>
                <p>{this.props.item.pokemonInfo}</p>
                <img src={this.props.item.pokemonImg} alt={this.props.item.pokemonImg}/>
            </div>
        )
    }
}

export default LoginForm;