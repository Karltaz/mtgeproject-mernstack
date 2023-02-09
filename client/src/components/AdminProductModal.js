import React, { Fragment, useState} from "react";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";

// redux 

import {useSelector , useDispatch} from "react-redux";
import { clearMessages } from "../redux/actions/messageActions";
import { createProduct } from "../redux/actions/productActions";

const AdminProductModal = () => {

     /**********************************************************
   Redux Global State Properties
  **********************************************************/

    const {loading}=useSelector(state => state.loading);
    const {successMsg,errorMsg}=useSelector(state => state.messages);
    const {categories}=useSelector(state => state.categories);

    const dispatch = useDispatch();

    /**********************************************************
   Component State Properties
  **********************************************************/

      const [clientSideError , setClientSideError]= useState("");
      const [productData, setProductData] = useState({
        productImage: null,
        productName: "",
        productDesc: "",
        productPrice: "",
        productCategory: "",
        productQty: "",
    });

    const {
        productImage,
        productName,
        productDesc,
        productPrice,
        productCategory,
        productQty
    } = productData;

    /**********************************************************
       EVENTS HANDLERS
     **********************************************************/

    const handleMessages = (evt) => {
        dispatch(clearMessages());
        setClientSideError("");
       
    }

    const handleProductChange = (evt) => {
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.value,
        });

    };


    const handleProductImage = (evt) => {
        console.log(evt.target.files[0]);
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.files[0],
        });
    };


    const handleProductSubmit = (evt) => {
        evt.preventDefault();

        if (productImage === null) {
            setClientSideError("Please select an image");
        } else if (isEmpty(productName) || isEmpty(productDesc) || isEmpty(productPrice)) {
            setClientSideError("All fields are required");
        } else if (isEmpty(productCategory)) {
            setClientSideError("Please select a category");
        } else if (isEmpty(productQty)) {
            setClientSideError("Please select a quantity");
        } else {
            let formData = new FormData();
            formData.append("productImage", productImage);
            formData.append("productName", productName);
            formData.append("productDesc", productDesc);
            formData.append("productPrice", productPrice);
            formData.append("productCategory", productCategory);
            formData.append("productQty", productQty);

           
            dispatch(createProduct(formData));
            setProductData({
                productImage: null,
                productName: "",
                productDesc: "",
                productPrice: "",
                productCategory: "",
                productQty: "",

            });
           
        }
    };


    /**********************************************************
   RENDERER
  **********************************************************/

    return (
        <div id="addProductModal" className="modal " onClick={handleMessages}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <form onSubmit={handleProductSubmit}>
                        <div className="modal-header bg-warning text-white">
                            <h5 className="modal-title"> Add Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close">
                            </button>
                        </div>
                        <div className="modal-body my-2">
                        {clientSideError && showErrorMsg(clientSideError)}
                            {errorMsg && showErrorMsg(errorMsg)}
                            {successMsg && showSuccessMsg(successMsg)}
                            {
                                loading ? (
                                    <div className="text-center">{showLoading()}</div>

                                ) : (

                                    <Fragment>

                                        <div className=" custom-file input-group mb-3">
                                            <input
                                                type="file"
                                                name="productImage"
                                                className=" custom-file-input form-control"
                                                onChange={handleProductImage}
                                            />

                                        </div>


                                        <div className="form-group" >
                                            <label className="text-secondary mb-2">
                                                Name
                                            </label>
                                            <input type="text"
                                                name="productName"
                                                value={productName}
                                                onChange={handleProductChange}
                                                className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <label className="text-secondary my-2">
                                                Description
                                            </label>
                                            <textarea
                                                className="form-control"
                                                name="productDesc"
                                                value={productDesc}
                                                rows="3"
                                                onChange={handleProductChange}
                                            >

                                            </textarea>
                                        </div>

                                        <div className="form-group">
                                            <label className="text-secondary my-2 ">
                                                Price
                                            </label>
                                            <input
                                                type="text"
                                                name="productPrice"
                                                value={productPrice}
                                                onChange={handleProductChange}
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="row ">
                                            <div className="form-group col-md-6">
                                                <label className="text-secondary my-2 ">Category</label>
                                                <select
                                                    className="form-select"
                                                    name="productCategory"
                                                    onChange={handleProductChange}
                                                /*size="2" */
                                                >
                                                    <option value="">Choose one...</option>
                                                    {categories && categories.map((c) => (
                                                        <option key={c._id} value={c._id} >
                                                            {c.category}
                                                        </option>
                                                    ))}
                                                </select>

                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className="text-secondary my-2">Quantity</label>
                                                <input
                                                    type="number"
                                                    name="productQty"
                                                    value={productQty}
                                                    className="form-control"
                                                    min="0"
                                                    max="1000"
                                                    onChange={handleProductChange}
                                                />
                                            </div>
                                        </div>


                                    </Fragment>

                                )
                            }


                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal"> Close</button>
                            <button type="submit" className="btn btn-warning text-white"> Submit</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
};






export default AdminProductModal;