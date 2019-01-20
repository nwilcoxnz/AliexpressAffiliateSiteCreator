import * as React from 'react';
import { Product } from '../models/Product';
import * as $ from 'jquery';

function populateModal(product: Product) {
    const modal = $('#product-modal')
    modal.find('.modal-title').text(product.title)
    modal.find('#modal-img').attr("src", product.images)
    modal.find('#modal-description').text(product.description)
    modal.find('#modal-price').text(product.price)
    modal.find('#modal-affiliate-link').attr("href", product.affiliate_link)
}

export const ProductCardInner = (product: Product) => (
    <div className="card">
        <div data-toggle="modal" data-target="#product-modal" data-product={product} onClick={() => populateModal(product)}><img className="card-img-top" src={product.images} alt="Card image cap" /></div>
        <div className="card-body">
            <h4 className="card-title">{product.title}</h4>
            <p className="card-text">{product.price}</p>
        </div>
    </div>

);

export const ProductCard = (product: Product) => (
    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
        <div className="d-block mb-4 h-100">
            <ProductCardInner {...product} />
        </div>
    </div>
);

export default ProductCard;
