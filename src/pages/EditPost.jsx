import React from 'react';
import { useParams } from 'react-router-dom';


const EditPost = () => {
  const {id} = useParams()  // id  - это тот id который был передан в path в компоненте app

  return (
    <div>
      <h1> Edit POSTSSSS {id}</h1>
    </div>
  );
};

export default EditPost;