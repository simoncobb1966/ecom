import React, { Component } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class ProductSmall extends Component {




    render() {
        const gf = require('./images/goldfinger.jpg');


        return (
            <div className="col-sm-4 col-med-4 col-lg-4 white centered">
                <div className="productnamebox">
                    <h4>Goldfinger</h4>
                </div>
                <div>
                    <img className="img-fluid" src={gf} alt="goldfinger"></img>
                </div>

                <div>
                    Lorem ipsum dolor sit amet sdfsdf sdf d wer weer
      </div>
                <div>
                    <button type="button" class="btn btn-danger buttona">Buy DVD</button>
                    <button type="button" class="btn btn-primary buttona">BluRay</button>
                </div>
            </div>

        )
    }
}
export default ProductSmall;