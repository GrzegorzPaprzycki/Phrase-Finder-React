import React from 'react';
import './Phrases.css';
import Phrase from './Phrase.js';


const Phrases = props => {
  const phrases = props.messages.map(phrase => (
    <Phrase
      phraseOfficial={phrase.phraseOfficial}
      key={phrase.id}
      active={phrase.active}
    />
  ));
  return (
    <section>
      <h2>WYSZUKIWANE FRAZY</h2>
      <div className="phrases">{phrases}</div>
      <form className="newPhrase">
        <label htmlFor="addPhrase">
          {" "}
          Dodaj nową frazę
          <input
            type="text"
            id="addPhrase"
            placeholder="Wpisz nazwę"
            onChange={props.change}
            value={props.value}
          ></input>
        </label>
        <button onClick={props.click}>Dodaj</button>
      </form>
    </section>
  );
};

export default Phrases;
