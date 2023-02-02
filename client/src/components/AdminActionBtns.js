import React from "react"; 
    const AdminActionBtns = () => (

        <div className="bg-light my-2">
            <div className="container">
                <div className="row pb-2">
                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-info btn-block"
                            data-bs-toggle="modal"
                            data-bs-target="#addCategoryModal"
                        >
                            <i className="fas fa-plus"> </i> Add Category
                        </button>
                    </div>
                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-warning btn-block"
                            data-bs-toggle="modal"
                            data-bs-target="#addProductModal"
                        >
                            <i className="fas fa-plus"> </i>  Add Product
                        </button>
                    </div>
                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-success btn-block">
                            <i className="fas fa-money-check-alt"> </i> 
                            {""}
                            View Orders
                        </button>
                    </div>

                </div>
            </div>


        </div>
    );

    export default AdminActionBtns;