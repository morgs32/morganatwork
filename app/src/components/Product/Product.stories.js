import React from 'react';
import Product from './Product';
import product from '../../../cms/products/stackshirts/meta'

export default {
  component: Product,
  title: 'Components/Product',
};

export const Example = () => {
    return (
      <div className="bg-dark">
        <div className="container py-3">
          <Product product={product} />
        </div>
      </div>
    );
}
