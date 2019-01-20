import * as React from 'react';
import { Product } from '../models/Product';
import ProductCard from './Product_Card';

interface ProductResultsProps {
  products: Product[]
  resultType: string
  pageTitle: string
}

class ProductResults extends React.Component<ProductResultsProps, {}> {
  public render() {
    return (<div>
      <br />
      <h2 className="text-center header">{this.props.pageTitle}</h2>
      <div className="container">
        <hr />
        <div className="row text-center text-lg-left">
          {this.props.products.map((product: Product, id = 0) => {
            if (product.category === this.props.resultType) { return <ProductCard {...product} key={"listing" + id++}/> }
            else { return null }; // Ideally we would just display what we are passed through instead of sorting every time
          })}
        </div>
      </div>
    </div>
    );
  }
}

export default ProductResults;
