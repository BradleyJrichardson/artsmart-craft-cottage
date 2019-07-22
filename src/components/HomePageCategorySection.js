import React, { Component } from "react";
import "./HomePageCategorySection.css";
import categoryPackage from "./categoriesData";
import CategoryCards from './CategoryCards';

import { Link } from "react-router-dom";
console.log( categoryPackage)

export default class HomePageCategorySection extends Component {
  render() {
    return (
      <section className='categories-section'>
        <h3>Categories</h3>
        <div className='whatsnew'>
          {categoryPackage.map((object, index) => {
            if(object.subcategories){
              return (
                <Link key={index}
                      to={{
                        pathname: "/subcategory",
                        state: {
                          subcategories: object.subcategories
                        }
                      }}
                    >
  
                  <CategoryCards key={index} object={object} />
                </Link>
              );   
            }else{
              return(
                <Link key={index} to={{
                  pathname: "/category",
                  state:{
                    category: object.category.toLowerCase()
                  }
                }}>
                  <CategoryCards key={index} object={object} />
                </Link>
              )
            }
            
          })}
         
        </div>
        
      </section>
    );
  }
}
