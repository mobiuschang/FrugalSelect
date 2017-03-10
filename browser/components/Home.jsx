var React = require('react');
import Navbar from './navbar/Navbar';

import { TextField } from 'material-ui';

class Home extends React.Component {

 render() {

    return (
      <div>
        <div>Home.jsx rendered</div>
        <Navbar />
        { this.props.children }
      </div>
    )
  }
}

export default Home;