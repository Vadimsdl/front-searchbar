import React from 'react';
import './list.css';

const List = ({info}) => {

  const showInfo = () => {
    const arr = [];
    for(const [key, value] of Object.entries(info)) {
      arr.push(
        <div className="info-status" key={key}> 
          <h4 className="status">{key}:</h4> 
          <span>{value.length ? value : 'n/a'}</span>
        </div>
      );
    }
    return arr;
  } 

  return (
    <div className="head-info">
      <h2> INFO </h2>
      {showInfo().map(val => val)}
    </div>
  );
}

export default List;
