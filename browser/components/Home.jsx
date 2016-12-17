var React = require('react');
import Navbar from './navbar/Navbar';

import { TextField } from 'material-ui';

export default class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const {children} = this.props;
    return (
      <div>
        <div>Home.jsx rendered</div>
        <Navbar />
          { children }
      </div>
    )
  }
}

module.exports = Home;