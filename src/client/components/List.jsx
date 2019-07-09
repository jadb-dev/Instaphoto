import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
// import fetch from 'isomorphic-fetch'

class List extends Component{
  constructor(props){
    super(props);
    this.state = {};
    }


  render(){
    const images =[];
    // console.log('instagram in list', this.props.instagram)
    // const imageArr= Object.values(this.props.instagram)
    // console.log(imageArr)
    for(let i=0; i<this.props.instagram.length; i++){
      images.push(
        <img key= {`key ${i}`} width="400" height="500" src={this.props.instagram[i].node.display_url}></img>
      )
    }

    return  (
        <div style={{alignItems: 'center', padding: "20px", borderRadius: "25px", backgroundColor: "gainsboro", backgroundImage: "url('https://wallpapercave.com/wp/Nn4CMwO.jpg')"}}>
      <Collapsible trigger="Photos" triggerStyle={{fontSize: '30px', position: 'center', color: 'gainsboro'}}>
      {/* <p>Here is the instagram photo of the city!</p> */}
      <br></br>
      {images}
      </Collapsible>
      </div>
    )
  }
}

export default List;