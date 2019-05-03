import React, { Component } from 'react';
import './App.css';
import Modalbutton from './components/modalbutton';
import Header from './components/header';
import Footer from './components/footer';
import Button from '@material-ui/core/Button';

class App extends Component {

  buttonHandler = (buttonName) => {
    alert("Button handler " + buttonName.currentTarget.value)
  }

  render() {
    return (

      <div className="outerdiv">
        <div class="container">
          <div className="maindiv">
            <Header />
            <div className="row">
              <div class="col-sm">
              </div>
              <div class="col-sm">
                <Modalbutton
                  buttonHandlerFunction={this.buttonHandler}
                />
              </div>
              <div class="col-sm">
              <Button variant="contained" color="primary">
      Hello World
    </Button>
              </div>

            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
