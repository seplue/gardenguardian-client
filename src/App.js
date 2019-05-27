import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div>
          <Header height={"100"} />
          <AppRouter />
        </div>
    );
  }
}

export default App;