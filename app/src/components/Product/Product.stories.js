import React from 'react';
import { storiesOf } from '@storybook/react';
import Product from './Product';
import product from '../../../cms/products/stackshirts/meta.yml'

console.log('product', product);

storiesOf('Components/Product', module)
  .add('Product', () => {
    return (
      <div className="bg-dark">
        <div className="container py-3">
          <Product product={product} />
        </div>
      </div>
    );
  });

