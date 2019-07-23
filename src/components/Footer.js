import React, { Component } from "react";
import "../App.css";
import "./Footer.css";
import ContactMeForm from "./ContactMeForm";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container footer">
          <div className = 'row'>
            <div className = 'col-sm-12 col-md-3 p-2 ' style ={{backgroundColor: 'rgba(134, 185, 181, 0.733)'}}>
              <img className="footer-image" src='https://artsmartcraftcottage.com.au/wp-content/uploads/2015/12/922910_892226064229683_1603762434250422022_n-300x300.png' alt="placeholder" /></div>
            <div className = 'col-sm-12 col-md-6 p-3 ' style ={{backgroundColor: 'rgba(134, 185, 181, 0.733)'}}>
              <p className = 'footer-text'> 
              Hi I’m Libby Richardson, designer at and creator of Artsmart Craft Cottage and The Craft Barn. My love of designing and crafts started as a very young girl collecting gum nuts and all bits and pieces out and around the gardens of my home in a small country town called Maryborough, Victoria. My favorite memories growing up were sitting around the kitchen table with my wonderful Mum doing all sorts of crafts from fimo clay, Gum nut babies, drawing, paper mache, hobbytex, finger knitting, lace decorating, crochet and pretty much what ever the new craze was, we would give it a go. I even remember door knocking around the neighborhood and earning a little pocket money selling my creations, the funny things we do as kids.
              </p>
            </div>
            <div className = 'col-sm-12 col-md-3 p-2' style ={{backgroundColor: 'rgba(134, 185, 181, 0.733)'}}><ContactMeForm /></div>
            
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
