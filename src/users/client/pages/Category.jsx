import React from 'react';
import {useParams} from "react-router-dom";

function Category() {

  const {param} = useParams()

  return (
    <div>
      Category
      {param}
    </div>
  );
}

export default Category;