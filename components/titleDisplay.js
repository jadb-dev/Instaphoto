import React, { Component } from 'react';

class TitleDisplay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{backgroundColor: 'bisque', padding: '20px', borderRadius: '25px', backgroundImage: "url('https://wallpapercave.com/wp/Nn4CMwO.jpg')"}}>
            <h1 style={{textAlign: 'center', color: 'gainsboro'}}>{this.props.title}</h1>
            <form style={{textAlign: 'center', padding: '5px'}}>
                <input style={{textAlign: 'center'}} type="text" placeholder={this.props.location}/>
            </form>
            <hr style={{color: 'gainsboro'}}></hr>
            </div>
        );
    };
};

export default TitleDisplay;