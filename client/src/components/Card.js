import React from 'react';
import {Link} from "react-router-dom";

// redux

import{useDispatch} from "react-redux" ;
import {deleteProduct } from '../redux/actions/productActions';


const Card = ({product ,adminPage= false , homePage= false}) => {

  const dispatch = useDispatch();
    return(
       <div className="col-md-4 my-3">
        <div className='card   h-100 '>
     
            <a href='#!'>
                <img
                className='img-fluid w-100'
                src={`/uploads/${product.fileName}`}
                alt="product"
                 />
            </a>
            <div className='card-body text-center'>
              <h5>{product.productName}</h5>
              <hr/>
              <h6 className='mb-3'>
                <span className='text-secondary me-2'>
                    {product.productPrice.toLocaleString("de-DE", {
                       style: "currency",
                       currency: "EUR",
                    })}
                </span>
              </h6>
                <p>
                    {product.productDesc.length > 60
                     ? product.productDesc.substring(0,60) + "..." 
                     : product.productDesc.substring(0,60) }
                </p>

            {adminPage && (
              <>
                <Link to={`/admin/edit/product/${product._id}`} type='button' className='btn btn-secondary btn-sm me-1 my-1'>
                  <i className='far fa-edit pe-1'></i>
                  Edit
                </Link>
                <button type='button' className='btn btn-danger btn-sm'
                  onClick={() => dispatch(deleteProduct(product._id))} >
                  <i className='far fa-trash-alt pe-1'></i>
                  Delete
                </button>
              </>
            )}
            {homePage && (
              <>
                <Link to={"#"} type='button' className='btn btn-primary btn-sm me-1 my-1'>
                  <i className='far fa-thin fa-eye pe-1'></i>
                  View Product
                </Link>
                <button type='button' className='btn btn-warning btn-sm'>
                  <i className='fas fa-cart-shopping pe-1'></i>
                  Add to Cart
                </button>
              </>
            )}


                </div>
       </div> 
        </div>     
  )};

export default Card;