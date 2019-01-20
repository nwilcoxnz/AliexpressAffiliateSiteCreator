import * as React from 'react';
import ProductCarousel from './Product_Carousel';
import { Link } from 'react-router-dom';
import { Props } from '../models/State';
import { Product } from '../models/Product';

interface HomeProps extends Props {
    products: Product[];
}

class Home extends React.Component<HomeProps, {}> {
    public render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="intro-text text-center">
                            <h1 className="text-center">{this.props.config.tagline}</h1>
                            {this.props.config.categories[0] !== 'undefined' ? <Link className="btn btn-outline-dark see-more" to={"/" + this.props.config.categories[0]}>Shop Now</Link> : ""}
                        </div>
                    </div>
                </header>
                <div className="container">
                    <br />
                    {this.props.config.categories.map((category: string, id = 0) => {
                        return <div key={"carousel" + id++}>
                            <h2 className="text-center small-header">{category}</h2>
                            <br />
                            <div className="justify-content-center">
                                {this.props.products != null ? <ProductCarousel products={this.props.products} category={category} /> : ""}
                                <div className="text-center">
                                    <Link className="btn btn-outline-dark see-more" role="button" aria-pressed="true" to={"/" + category.toLowerCase()}>See More</Link>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default Home;
