import React from 'react';
import { storiesOf } from '@storybook/react';
import Product from './Product';
import product from '../../../pages/products/stackshirts/meta.yml'

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

