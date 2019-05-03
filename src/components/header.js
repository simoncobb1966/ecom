import React, { Component } from 'react';
class Header extends Component {




    render() {
        const banner = require('../images/jb_banner.png');


        return (

            <div>
                <div class="container">

                    <div className="row">
                        <div className="banner">
                            <img className="img-fluid" src={banner} alt="banner"></img>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}
export default Header;