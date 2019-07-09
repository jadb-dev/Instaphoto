import React from 'react';

const TitleDisplay = props =>{
    const updateLocation = e => {
        if(e.key === 'Enter') {
            const query = e.target.value;
            props.setLocation(query);
        }
    }
    return (
        <div style={{backgroundColor: 'bisque', padding: '20px', borderRadius: '25px', backgroundImage: "url('https://wallpapercave.com/wp/Nn4CMwO.jpg')"}}>
        <h1 style={{fontSize: '40px', textAlign: 'center', color: 'gainsboro'}}>Instaphoto</h1>
            {/* <input style={{textAlign: 'center'}} type="text" placeholder={props.location} onKeyUp = {updateLocation}/> */}
        <hr style={{color: 'red'}}></hr>
        <br></br>
        </div>
    );
}
   
        
export default TitleDisplay;