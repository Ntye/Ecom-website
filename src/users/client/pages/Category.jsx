import React from 'react';
import {useParams} from "react-router-dom";

function Category() {

  const {param} = useParams()

  return (
    <div>
      Category heheheeeeeee
      {param}
    </div>
  );
}

export default Category;