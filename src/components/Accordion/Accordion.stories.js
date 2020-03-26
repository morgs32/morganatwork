import React, { useState } from 'react';
import Accordion from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
};


export const Default = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="container my-4">
      <button
        className="mb-4 btn btn-primary"
        onClick={() => setOpen(!open)}>
        Toggle
      </button>
      <div className="border rounded p-4">
        <Accordion open={open}>
          The initial/from/enter/update/leave lifecycles can be objects, arrays or functions. When you provide a
          function
          you have access to individual items. The function is allowed to return plain objects, or either an array or a
          function for multi-stage transitions. When you provide a plain array you also can form a basic multi-stage
          transition (without access to the item).

          The initial/from/enter/update/leave lifecycles can be objects, arrays or functions. When you provide a
          function
          you have access to individual items. The function is allowed to return plain objects, or either an array or a
          function for multi-stage transitions. When you provide a plain array you also can form a basic multi-stage
          transition (without access to the item).

          The initial/from/enter/update/leave lifecycles can be objects, arrays or functions. When you provide a
          function
          you have access to individual items. The function is allowed to return plain objects, or either an array or a
          function for multi-stage transitions. When you provide a plain array you also can form a basic multi-stage
          transition (without access to the item).

          The initial/from/enter/update/leave lifecycles can be objects, arrays or functions. When you provide a
          function
          you have access to individual items. The function is allowed to return plain objects, or either an array or a
          function for multi-stage transitions. When you provide a plain array you also can form a basic multi-stage
          transition (without access to the item).
        </Accordion>
      </div>
    </div>
  );
};
