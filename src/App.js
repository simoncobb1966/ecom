import React, { Component } from 'react';
import './App.css';
import Modalbutton from './components/modalbutton';
import Header from './components/header';
import Footer from './components/footer';
import Productsmall from './components/productSmall';
// import Button from '@material-ui/core/Button';

class App extends Component {

  buttonHandler = (buttonName) => {
    alert("Button handler " + buttonName.currentTarget.value)
  }

  jb = [{
    title: "Doctor No",
    image: "doctor_no.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus.",
    pricedvd: 9.99,
    priceblu: 14.99,
    stockdvd: 55,
    stockblu: 23},

    {
      title: "From Russia with love",
      image: "russia_with_love.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus.",
      pricedvd: 9.99,
      priceblu: 14.99,
      stockdvd: 55,
      stockblu: 23},
      
      {
        title: "Thunderball",
        image: "thunderball.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus.",
        pricedvd: 9.99,
        priceblu: 14.99,
        stockdvd: 55,
        stockblu: 23}

  ]


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

                <Productsmall jb={this.jb[0]} />
                <Productsmall jb={this.jb[1]} />
                <Productsmall jb={this.jb[2]} />

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
