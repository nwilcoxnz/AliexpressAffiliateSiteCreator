import * as React from 'react';
import { Product } from '../models/Product';
import { ProductCardInner } from '../components/Product_Card';

interface CarouselProps {
    category: string;
    products: Product[];
}

class ProductCarousel extends React.Component<CarouselProps, {}> {
    public render() {
        return (
            <div id={'myCarousel' + this.props.category} className="carousel slide" data-ride="carousel" data-wrap="false" data-interval="false">
                <div className="carousel-inner row w-100 mx-auto justify-content-center">
                    <div className="row">
                        {(this.props.products).map((product: Product, count = 0) => {
                            return (
                                <div key={'carousel-item' + count} className={count++ === 0 ? 'carousel-item col-lg-3 col-md-4 active' : 'carousel-item col-lg-3 col-md-4'}>
                                    <ProductCardInner {...product} />
                                </div>
                            );
                        })}
                        <a className="carousel-control-prev" href={'#myCarousel' + this.props.category} role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href={'#myCarousel' + this.props.category} role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCarousel;
