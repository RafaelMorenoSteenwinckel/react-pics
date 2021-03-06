import React, { Component } from 'react';

//comme je dois utiliser le state --> je fait un composant class (et pas un fonctional component)


class SearchBar extends Component {

    constructor(props) {
        super (props);
        this.state = {inputValue: ''};

        //pour acceder a this dans onInputchange 
        //this.onInputChange = this.onInputChange.bind(this); //pas besoin onInputChange est une arrow function
        //this.onInputClick = this.onInputClick.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange = (event) => {
        this.setState({inputValue: event.target.value});
    }

    //On a acces directement au THIS
    /*onInputClick = () => {
        this.setState({inputValue: 'click'});
        console.log ('click !');
    };*/

    //IL faut binder le this avec bind dans le constructeur
    /*
    onInputClick() {
        this.setState({inputValue: 'click'});
        console.log ('click !');
    };*/

    /*
    onSubmit: function(event) {}
    Identique à
    onSubmit(event) (
Dans ce cas la il faut binder le this dans le constructeur
    )
    */

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue)
    }

    /*onSubmit = (event) => {
        event.preventDefault();
        console.log (this.state.inputValue);
    }*/

    render () {

        

        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={ this.onSubmit }>
                    <div className="field">
                        <label>Search</label>
                        {
                            //<input type="text" value={this.state.inputValue} onChange={ (event) => this.onInputChange(event) } />
                        }
                        <input type="text" value={this.state.inputValue} onChange={ (event) => this.onInputChange(event) } />
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;