var React = require('react');
import { TextField } from 'material-ui';

var Home = (props) => {
  return (
    <div>
      <div>Home.jsx rendered</div>
      <TextField floatingLabelText ="Email" type = 'email' fullWidth={true} />
    </div>
  )
}

module.exports = Home;