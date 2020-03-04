import React from 'react';

const Phrase = props => {
  return (
    <p className={props.active ? "active" : null}>{props.phraseOfficial}</p>
  );
};

export default Phrase;
