import logo from './logo.jpg';
import './App.css';
import Header from './Header';
import React from 'react';
import Home from './views/Home';
import Formations from './views/Formations';
import Pedagogie from './views/Pedagogie';

const Footer = () => <div className="app-footer flexCenter blueBkg">©2021 Les Institut des Hautes Etudes </div>



/* j'importe les composants ICI */

/* */


/* */
const navigator = {
  "home" : <Home />,
  "formations" : <Formations />,
  "pedagogie" : <Pedagogie />,
  
}
/* */

class App extends React.Component {
  state = {
    view: 'home'
  }

  switchView = view => this.setState({view});

  render() {
    const {view} = this.state;

    console.log('VIEW', view);
    return (
      <div className="App">
        <Header switchView={this.switchView} />
        <div className="flexCenter app-view">
          { navigator[view] || null }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;