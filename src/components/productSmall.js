import React, { Component } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class ProductSmall extends Component {

    render() {
        var dir = require('./images/product/' + this.props.jb.image);

        return (
            <div className="col-sm-4 col-med-4 col-lg-4 white centered">
                <div className="productnamebox">
                    <h4>{this.props.jb.title}</h4>
                </div>
                <div>
                    <img className="img-fluid" src={dir} alt={this.props.jb.title}></img>
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