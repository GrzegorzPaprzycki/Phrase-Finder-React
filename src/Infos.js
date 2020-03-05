import React from 'react';
import Item from './Item';

const Infos = props => {
  const items = props.kbvData.map(item => (
    <Item key={item.id} phraseOfficial={item.phraseOfficial} info={item.info} />
  ));
  return (
    <div className="infosUpper">
      <h2>Results and hints</h2>
      {props.fileLoaded === "start" ? (
        <p>Results will be displayed after sending file </p>
      ) : null}
      {props.fileLoaded === "noFileLoaded" ? <p>No file loaded</p> : null}
      {props.fileLoaded === "loaded" && !props.kbvData.length ? (
        <p>None of the search phrases found in the uploaded file</p>
      ) : null}
      <div className="infos">{items}</div>
    </div>
  );
};

export default Infos;
