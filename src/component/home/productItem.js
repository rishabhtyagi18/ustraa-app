import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './css/productItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "./customButton/customButton";
import Fade from "react-reveal/Fade";

const ProductItem = ({
  item: { name, price, final_price, rating, weight, image_urls, is_in_stock }
}) => {
  return (
    <Fade>
      <div className="product-item">
        <div className="product-item-image-container">
          <img
            src={image_urls.x408}
            alt="product-image"
            className="product-item-image"
          />
        </div>
        {rating ? (
          <div className="product-item-rating-container">
            <span className="product-item-five">{rating}</span>
            <FontAwesomeIcon
              icon={faStar}
              className="product-item-rating-icon"
            />
          </div>
        ) : null}
        <div className="text-box">
          <span className="text-box-name">{name}</span>
          {weight ? (
            <span className="text-box-weight">({weight}gm)</span>
          ) : null}
          <div className="text-box-price-container">
            <span className="text-box-final-price">&#8377; {final_price}</span>
            <span className="text-box-price">&#8377; {price}</span>
          </div>
          {is_in_stock ? (
            <CustomButton>Add To Cart</CustomButton>
          ) : (
            <CustomButton outofstock>Out Of Stock</CustomButton>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default ProductItem;
