import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../../Styles/common.scss";
import "./Product.scss";

class Product extends Component {
  render() {
    const { imageURL, name, price } = this.props;
    return (
      <div className="Product">
        <div className="productContainer">
          <div className="productItem">
            <Link className="productItem__wrapper" to="/shop/detail/">
              <div className="imgFixedCtn">
                <img
                  alt="tshirt-front"
                  className="productItem__img img--fadeIn"
                  src={imageURL[0]}
                />
                <img
                  alt="tshirt-back"
                  className="productItem__img back-img img--fadeIn"
                  src={imageURL[1]}
                />
              </div>
            </Link>
            <div className="productItemInfo">
              <div className="productItem__title Heading">
                <Link className="productItem__wrapper" to="/shop/detail">
                  {name}
                </Link>
              </div>
              <div className="productItem__priceList Heading">
                <span className="productItem__price price">
                  <span className="money" data-product-id="123456789">
                    ${price}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
