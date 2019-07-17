import React, { Component } from "react";
import "./HomePageCategorySection.css";
import categoryPackage from "./categoriesData";
import CategoryCards from './CategoryCards';
import { Link } from "react-router-dom";


export default class HomePageCategorySection extends Component {
  render() {
    return (
      <section className='categories-section'>
        <h3>Categories</h3>
        <div className='whatsnew'>
        
        {categoryPackage.map((categoryDisplay, index) => {
          return (
            <Link key={index} to={{
              pathname: "/category",
              state:{
                category: categoryDisplay.category
              }
            }}>
              <CategoryCards key={index} categoryDisplay={categoryDisplay} />
            </Link>
          );
        })}
         
        </div>
        <p>........</p>
      </section>
    );
  }
}
