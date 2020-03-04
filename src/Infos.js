import React from 'react';
import Item from './Item';

const Infos = props => {
  const items = props.kbvData.map(item => (
    <Item key={item.id} phraseOfficial={item.phraseOfficial} info={item.info} />
  ));
  return (
    <div className="infosUpper">
      <h2>WSKAZÓWKI</h2>
      {props.fileLoaded === "start" ? (
        <p>Wskazówki zostaną wyświetlone po wysłaniu pliku .csv</p>
      ) : null}
      {props.fileLoaded === "noFileLoaded" ? <p>Nie wskazano pliku</p> : null}
      {props.fileLoaded === "loaded" && !props.kbvData.length ? (
        <p>W wysłanym pliku nie znaleziono żadnej z szukanych fraz</p>
      ) : null}
      <div className="infos">{items}</div>
    </div>
  );
};

export default Infos;
