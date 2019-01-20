import * as React from 'react';
import { Props } from '../models/State';

class Footer extends React.Component<Props, {}> {
  public render() {
    return ( <div className="bg-light">
        <footer  className="container py-5">
        <div  className="row">
          <div  className="col-12 col-md">
            <small  className="d-block mb-3 text-muted">{this.props.config.siteTitle} &copy; {(new Date).getFullYear()}</small>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}

export default Footer;