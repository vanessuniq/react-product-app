import React from 'react';
import HelloWorld from '../Components/HelloWorld';

class Home extends React.Component {
    render() {
        return ( 
            <div >
                <h1 className = "font-bold text-2xl mb-3" > Home Page </h1> 
                <HelloWorld name = "Learner" />
                <p> Welcome to the demo. Check the menu and make a selection</p>
            </div>
        )
    }
};

export default Home;