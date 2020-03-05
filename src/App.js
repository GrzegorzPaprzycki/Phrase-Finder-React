import React from 'react';
import './style.css';
import LoadFiles from './LoadFiles.js';
import Phrases from './Phrases';
import Infos from './Infos';

class App extends React.Component {
  state = {
    lines: [],
    messages: [
      {
        id: 0,
        phrase: "Chocolate milk",
        phraseOfficial: "Chocolate milk",
        info:
          "Chocolate milk was invented in Jamaica",
        active: false
      },
      {
        id: 1,
        phrase: "Hawaiian Pizza",
        phraseOfficial: "Hawaiian Pizza",
        info:
          "Hawaiian Pizza was invented by a boy from Canada.",
        active: false
      },
      {
        id: 2,
        phrase: "Cheese",
        phraseOfficial: "Cheese",
        info:
          "Cheese is the most frequently stolen food from shops.",
        active: false
      },
      {
        id: 3,
        phrase: "Chicken",
        phraseOfficial: "Chicken",
        info:
          'There are 19 billion chickens on Earth, while "only" 7,5 billion people.',
        active: false
      },
      {
        id: 4,
        phrase: "Microwave meal",
        phraseOfficial: "Microwave meal",
        info:
          "The technologies currently used in microwave ovens were used to track German aircraft during World War II.",
        active: false
      },
      {
        id: 5,
        phrase: "Beer",
        phraseOfficial: "Beer",
        info:
          "Builders of the Egyptian pyramids were paid with bread and beer.",
        active: false
      },
      {
        id: 6,
        phrase: "Lobster",
        phraseOfficial: "Lobster",
        info:
          'At the beginning of the XX century, lobsters were considered a delicacy for the poor, and were given to, e.g. prisoners. Everything changed thanks to railways - during long transcontinental journeys, lobster passengers were served as a sophisticated and exquisite dish.',
        active: false
      },
      {
        id: 7,
        phrase: "Fresh milk",
        phraseOfficial: "Fresh milk",
        info:
          'Before the invention of refrigerators, people would put live frogs into their milk to protect them from deterioration.',
        active: false
      },
      {
        id: 8,
        phrase: "Honey",
        phraseOfficial: "Honey",
        info:
          "Honey is the only food in the world that doesn't go bad",
        active: false
      },
      {
        id: 9,
        phrase: "Bread",
        phraseOfficial: "Bread",
        info:
          'Cosmonauts eat pancakes instead of bread, because crumbs can cause many problems inside the space station.',
        active: false
      },
      {
        id: 10,
        phrase: "Cookies",
        phraseOfficial: "Cookies",
        info:
          'Ruth Wakefield - the inventor of chocolate chip cookies - sold her idea to Nestle in exchange for a lifetime supply of chocolate',
        active: false
      },
      {
        id: 11,
        phrase: "Ketchup",
        phraseOfficial: "Ketchup",
        info:
          "In 96% of American homes, you'll always find ketchup. Salt and pepper not necessarily.",
        active: false
      },
      {
        id: 12,
        phrase: "White chocolate",
        phraseOfficial: "White chocolate",
        info:
          'Technically, white chocolate is not chocolate at all.',
        active: false
      },
      {
        id: 13,
        phrase: "Chips",
        phraseOfficial: "Chips",
        info:
          'The inventor Pringles was cremated after his death, and his ashes were placed in a tube after these chips.',
        active: false
      },
      {
        id: 14,
        phrase: "Cheddar",
        phraseOfficial: "Cheddar",
        info:
          'Cheddar is always orange because it is intentionally colored.',
        active: false
      },
      {
        id: 15,
        phrase: "Carrot",
        phraseOfficial: "Carrot",
        info:
          'Carrots-miniatures are simply ungrown specimens. They were "invented" when farmers got bored throwing them out as defective.',
        active: false
      }
    ],
    exceptions: [
      {
        phrase: "No Chocolate milk",
        phraseOfficial: "Chocolate milk",
      },
      {
        phrase: "No Hawaiian Pizza",
        phraseOfficial: "Hawaiian Pizza",
      },
      {
        phrase: "No Cheese",
        phraseOfficial: "Cheese",
      },
      {
        phrase: "No Chicken",
        phraseOfficial: "Chicken",
      },
      {
        phrase: "No Microwave meal",
        phraseOfficial: "Microwave meal",
      },
      {
        phrase: "No Beer",
        phraseOfficial: "Beer",
      },
      {
        phrase: "No Lobster",
        phraseOfficial: "Lobster",
      },
      {
        phrase: "No Fresh milk",
        phraseOfficial: "Fresh milk",
      },
      {
        phrase: "No Honey",
        phraseOfficial: "Honey",
      },
      {
        phrase: "No Bread",
        phraseOfficial: "Bread",
      },
      {
        phrase: "No Cookies",
        phraseOfficial: "Cookies",
      },
      {
        phrase: "No Ketchup",
        phraseOfficial: "Ketchup",
      },
      {
        phrase: "No White chocolate",
        phraseOfficial: "White chocolate",
      },
      {
        phrase: "No Chips",
        phraseOfficial: "Chips",
      },
      {
        phrase: "No Cheddar",
        phraseOfficial: "Cheddar",
      },
      {
        phrase: "No Carrot",
        phraseOfficial: "Carrot",
      }
    ],
    kbvData: [],
    fileLoaded: "start",
    kbvFile: false,
    newPhrase: "",
    counter: 100
  };

  handleClick = e => {
    if (!this.state.kbvFile) {
      this.setState({
        fileLoaded: "noFileLoaded"
      });
      return;
    }

    this.setState({
      fileLoaded: "loaded"
    });
    const reader = new FileReader();
    reader.onload = () => {
      let lines = reader.result
        .replace(/[\r\n\u0085\u2028\u2029]+/g, " ")
        .replace(/�/g, "*")
        .split()
        .map(function (line) {
          return line.split(",");
        });

      this.setState({ lines });

      for (let i = 0; i < lines[0].length; i++) {
        for (let j = 0; j < this.state.messages.length; j++) {
          if (
            lines[0][i]
              .toLowerCase()
              .includes(this.state.messages[j].phrase.toLowerCase())
          ) {
            let messages = this.state.messages;
            messages[j].active = true;
            this.setState({
              messages,
            })
          }
        }
      }

      for (let i = 0; i < lines[0].length; i++) {
        for (let j = 0; j < this.state.exceptions.length; j++) {
          if (
            lines[0][i]
              .toLowerCase()
              .includes(this.state.exceptions[j].phrase.toLowerCase())
          ) {
            const index = this.state.messages.findIndex(
              message =>
                message.phraseOfficial ===
                this.state.exceptions[j].phraseOfficial
            );
            let messages = this.state.messages;
            messages[index].active = false;
            this.setState({
              messages,
            })
          }
        }
      }

      const kbvData = this.state.messages.filter(message => message.active);
      this.setState({ kbvData });
    };
    reader.readAsText(document.getElementById("kbvFile").files[0]);
  };

  handleChangeFile = e => {
    let messages = [...this.state.messages];
    messages.forEach(message => {
      message.active = false;
    });
    this.setState({
      messages,
      kbvData: [],
      fileLoaded: "start",
      kbvFile: true
    });
  };

  handleChangeNewPhrase = e => {
    this.setState({
      newPhrase: e.target.value
    });
  };

  handleAddPhrase = e => {
    e.preventDefault();
    if (!this.state.newPhrase) return alert("No phrase given");
    const newPhrase = {
      id: this.state.counter,
      phrase: this.state.newPhrase,
      phraseOfficial: this.state.newPhrase,
      info: `${this.state.newPhrase} has been found`,
      active: false
    };
    const messages = [...this.state.messages, newPhrase];

    this.setState({
      messages,
      newPhrase: "",
      counter: this.state.counter + 1
    });
  };

  // handleTestClick = () => {
  //   console.log(this.state);
  // };

  render() {
    return (
      <div className="wrapper">
        <header>
          <h1>Phrase Finder</h1>
        </header>
        <main>
          <LoadFiles
            click={this.handleClick}
            kbvFile={this.state.kbvFile}
            change={this.handleChangeFile}
          />
          <Phrases
            messages={this.state.messages}
            click={this.handleAddPhrase}
            change={this.handleChangeNewPhrase}
            value={this.state.newPhrase}
          />
          <Infos
            kbvData={this.state.kbvData}
            fileLoaded={this.state.fileLoaded}
          />
        </main>
        <footer>
          <p>Powered by Grzegorz Paprzycki</p>
          {/* <button onClick={this.handleTestClick}>Test state</button> */}
        </footer>
      </div>
    );
  }
}

export default App;
