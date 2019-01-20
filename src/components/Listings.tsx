import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Home_Page';
import { Product } from '../models/Product';
import { Config } from '../models/Config';
import ProductResults from './Product_Results';

function windowsScrollToTop() { // Need to reset page to the top when tab changes
  window.scrollTo(0, 0);
}

interface ListingProps {
  config: Config;
  products: Product[];
}

class Listings extends React.Component<ListingProps, {}> {
  public render() {
    return (
      <div>
        {windowsScrollToTop()}
        <Switch>
          <Route exact={true} path="/" render={() => <HomePage config={this.props.config} products={this.props.products} />} />
          {this.props.config.categories.map((category: string, id = 0) => {
            return <Route key={"route" + id++} path={"/" + category.toLowerCase()} render={() => <ProductResults products={this.props.products}
              resultType={category.toLowerCase()} // TODO: remove this and sort the product file into categories instead
              pageTitle={category}
            />}
            />
          })}
        </Switch>
      </div>
    );
  }
}

export default Listings;
