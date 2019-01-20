import * as React from 'react';
import { Link } from 'react-router-dom';
import * as $ from 'jquery';
import { Props } from '../models/State';


function hideNavBar() {
    $('.navbar-collapse').hide(); // Every time we render the navbar make sure it's hidden
}

class Navbar extends React.Component<Props, {}> {
    public render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <Link className="navbar-brand" to="/">{this.props.config.siteTitle}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {this.props.config.categories.map((category: string, id = 0) => {
                            return <li className="nav-item" key={"nav" + id++}>
                                <Link className="nav-link" to={"/" + category.toLowerCase()}>{category}</Link>
                            </li>
                        })}
                    </ul>
                </div>
                {hideNavBar()}
            </nav>
        );
    }
}

export default Navbar;
