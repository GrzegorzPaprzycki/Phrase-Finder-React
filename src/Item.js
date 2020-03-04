import React from 'react';

const Item = props => {
  return (
    <div className="info">
      <h3>{props.phraseOfficial}</h3>
      <p>{props.info}</p>
    </div>
  );
};

export default Item;
