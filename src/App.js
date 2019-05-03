import React, { Component } from 'react';
import './App.css';
import Modalbutton from './components/modalbutton';
import Header from './components/header';
import Footer from './components/footer';
import Productsmall from './components/productSmall';
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

            <div className="row banner">
              <Header />
            </div>
            <div className="row">

              <div className="col-sm">
              </div>

              <div className="col-sm centered">
                <Modalbutton
                  buttonHandlerFunction={this.buttonHandler}
                />
              </div>

              <div className="col-sm">
              </div>

            </div>


            <div class="container">
              <div className="row innerarea">

                <Productsmall />
                <Productsmall />
                <Productsmall />

              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <Footer />
              </div>
            </div>

          </div>

        </div>
      </div >
    );
  }
}

export default App;
