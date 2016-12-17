import React from 'react';
import { TextField } from 'material-ui';

export default({ product }) => {
  return (
    <div>
    This is product
    <TextField floatingLabelText ="Email" type = 'email' fullWidth={true} />
    </div>
  )
}