import * as React from 'react';

const ProductModal = () => (
    <div className="modal fade" id="product-modal" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modal-label"/>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-6">
                            <img id="modal-img"/>
                            
                        </div>
                        <div className="col-md-6">
                            <p id="modal-description"/>
                            <p id="modal-price"/>
                            <a className="btn btn-outline-dark" target="_blank" id="modal-affiliate-link">Buy on Aliexpress</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ProductModal;
