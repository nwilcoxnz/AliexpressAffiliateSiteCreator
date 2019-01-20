// import 'core-js/es6/map';
// import 'core-js/es6/set';
import * as React from 'react';
import Footer from './components/Footer';
// import Get from './helpers/API_Caller';
import Navbar from './components/Navbar';
import ProductModal from './components/Product_Modal';
import Listings from './components/Listings';
import { Product } from './models/Product';
import { State } from './models/State';
// import * as config from "react-global-configuration";
// import { Config } from './models/Config';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import { BrowserRouter } from 'react-router-dom'

interface AppState extends State {
  products: Product[];
  error: boolean;
};

class App extends React.Component<{}, AppState> {
  constructor(props: Product[]) {
    super(props);
    this.state = {
      config: {
        categories: [],
        siteTitle: "",
        tagline: ""
      },
      error: false,
      products: []
    };
  }

  public componentDidMount() {

    // IF USING LOCAL FILE

    this.setState((prevState, props) => ({
      config: prevState.config, products: require('./products.json')
    }));

    // IF USING API

    // Get("./products.json").then((result: Product[]) => { 
    //   this.setState((prevState, props) => ({
    //     config: prevState.config, products: result
    //   }));
    // }).catch((e: any) => {
    //   this.setState({ error: true })
    // })

    // ALWAYS NEED THIS 

    this.setState((prevState, props) => ({
      config: require('./config.json'), products: prevState.products
    }));

  }

  public render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar config={this.state.config} />
          <div className="page">
            <Listings products={this.state.products} config={this.state.config} />
            <ProductModal />
          </div>
          <Footer config={this.state.config} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
