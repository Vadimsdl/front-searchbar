import React from 'react';
import './list.css';

const List = ({info}) => {
  return (
    <div className="head-info">
      <h2> INFO </h2>
      <>
        {Object.keys(info).reduce((acc, item) => {
          acc.push( 
            <div className="info-status" key={item}> 
              <h4 className="status">{item}:</h4> 
              <span>{info[item].length ? info[item] : 'n/a'}</span> 
            </div>);
          return acc;
        }, []).map(val => val)}
      </>
    </div>
  );
}

export default List;
