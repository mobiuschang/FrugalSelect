import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

const mapStateToProps = ({ product }) => ({ product });

export default connect (mapStateToProps)(Product);