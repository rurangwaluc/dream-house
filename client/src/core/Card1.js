import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from './ShowImage';
// import moment from 'moment';
// import { addItem, updateItem, removeItem } from './cartHelpers';

const Card = ({
  property,
  showViewPropertyButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemovePropertyButton = false,
  setRun = f => f,
  run = undefined
  // changeCartSize

}) => {



  const showViewButton = showViewProductButton => {
    return (
      showViewPropertyButton && (
        <Link to={`/property/${property._id}`} className="mr-2">
          <button className="btn btn-outline-success mt-2 mb-2 card-btn-1">View Property</button>
        </Link>
      )
    );
  };











  return (
    <div className="col-md-12 mb-3 text-center border-0">
      <div className="">
        <div className="">{property.name}</div>
        <div className="">
          <ShowImage item={property} url='property' />



          <p className="black-9 w-50 m-auto">Bedrooms: {property.bedrooms && property.bedrooms.name}</p>
          <p className="black-9 w-50 m-auto">Bathrooms: {property.bathrooms && property.bathrooms.name}</p>

          <br />

          {showViewButton(showViewPropertyButton)}


        </div>
      </div>
    </div>
  );
};

export default Card;