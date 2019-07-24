import React from "react";
import "./ProductDetails.css";
import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleClose = () => this.setShow(false);
  handleShow = () => this.setShow(true);
  setShow = value => {
    this.setState({
      show: value
    });
  };

  render() {
    let {
      price,
      title,
      categories,
      images,
      description
    } = this.props.location.state.product;
    let { product } = this.props.location.state;

    return (
      <React.Fragment>
        <ThemeConsumer>
          {value => {
            return (
              <>
                <div className="container d-flex flex-wrap">
                  <Modal
                    size="lg"
                    show={this.state.show}
                    onHide={this.handleClose}
                    aria-labelledby="example-modal-sizes-title-sm"
                  >
                    <Modal.Header closeButton class="modal-header">
                      <p>{title.toUpperCase()}</p>
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel>
                        {images.map((image, index) => {
                          return (
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={image}
                                alt="Max-height 100%"
                              />
                            </Carousel.Item>
                          );
                        })}
                      </Carousel>
                    </Modal.Body>
                  </Modal>

                  <div className="image-div p-2" onClick={this.handleShow}>
                    <div className="big-top-image ">
                      <img
                        className="image-in-detail-page"
                        src={images[0]}
                        alt="product"
                      />
                    </div>
                    <div className="small-buttum-images d-flex flex-row ">
                      {images.slice(0, 4).map((image, index) => {
                        return (
                          <img
                            className="small-image"
                            src={image}
                            alt="product"
                          />
                        );
                      })}
                      ;
                    </div>
                  </div>
                  <div className="right-hand-div col-md-7">
                    <h1 className="detail-page p-4">{title.toUpperCase()}</h1>
                    <h3 id="price"> $ {price}</h3>
                    <div className="add-to-cart-button d-flex justify-content-end p-3 ">
                      <Link to="/products">
                        <button
                          className="btn btn-green"
                          onClick={() => {
                            value.addToCart(product);
                          }}
                        >
                          Add To Cart
                        </button>
                      </Link>
                    </div>
                    <h4 className="categori-type p-3">
                      {" "}
                      Category :{" "}
                      <span id="category-text">
                        {categories[0].toUpperCase()}
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="description pl-2">
                  <h4> Description : </h4>
                  <p>{description}</p>
                </div>
              </>
            );
          }}
        </ThemeConsumer>
      </React.Fragment>
    );
  }
}
