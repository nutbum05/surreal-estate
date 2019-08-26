import React from 'react';
import { render } from 'react-dom';
import '../styles/app.css';
import NavBar from '../components/nav-bar';

class App extends React.Component {
    constructor(props) {
      super(props);
    }

render(){
    return (
        <div>
            <NavBar />
        </div>
    )
}
}


export default App;
