import React from 'react';
import { useSelector } from 'react-redux';

function New() {
  const dataName = useSelector(state => state.search);
  return (
    <div style={{textAlign:"center"}}>
      {dataName.data.data.name}
    </div>
  );
}

export default New;
