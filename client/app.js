import React, { Component } from 'react';
import TitleDisplay from '../components/titleDisplay';
import MainContainer from '../components/mainContainer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Instaphoto",
            location: "Enter Location",
        };
    }
    render() {
        return (
            <div>
                <TitleDisplay title={this.state.title} location={this.state.location}/>
                <MainContainer/>
            </div>
        );
    };
};

export default App;