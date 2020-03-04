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
        phrase: "ELDI",
        phraseOfficial: "ELDI",
        info:
          "Grzalka ELDI zabudowana w autobusie (przebudowa Leitung HLK oraz elementow szkieletowych pod katem ELDI. Konieczne zadanie na HLK Software oraz polozenia zlacza pradowego).",
        active: false
      },
      {
        id: 1,
        phrase: "CEJN",
        phraseOfficial: "CEJN",
        info:
          "Złącze CEJN (przebudowa Leitung HLK oraz elementow szkieletowych pod kątem ELDI. Konieczne zadanie na HLK Software)",
        active: false
      },
      // {
      //   id: 2,
      //   phrase: "Wartesaalschaltung",
      //   phraseOfficial: "Wartesaalschaltung",
      //   info:
      //     "Zwróc uwagę czy chodzi o lampki czy o piecyk z Bypassem. W razie piecyka konieczne zadanie na HLK, Software oraz elektrykę.",
      //   active: false
      // },
      {
        id: 3,
        phrase: "reinstiegsbeleuchtung",
        phraseOfficial: "LED-Türeinstiegsbeleuchtung",
        info:
          "Odpowiednie elementy szkieletowe na wejsciach do autobusu. Uwaga na Auffahrkufe z przodu po prawej.",
        active: false
      },
      {
        id: 4,
        phrase: "Vorderachsschmierung",
        phraseOfficial: "Vorderachsschmierung",
        info:
          "Zabudowa odpowiedniego ukladu smarowania - konieczna kontrola otoczenia osi. Sprawdź czy osie mają czujniki skrętu.",
        active: false
      },
      {
        id: 5,
        phrase: "Schneeketten",
        phraseOfficial: "Schneeketten",
        info:
          "Podmiana chlapaczy na wariant przystosowany do łańcuchów śniegowych. Trzeba upewnić się czy klient zamówił również schowek na łańcuchy. Jeżeli nie, to czy na pewno nie chce?",
        active: false
      },
      {
        id: 6,
        phrase: "Auffahrkufen",
        phraseOfficial: "Auffahrkufen",
        info:
          "Jeżeli seryjne to spoko. Natomaist jeżeli KSW to:   L4C: Podmiana elementów szkieletowych, kompatybilnych z odbojnikami z tyłu.    L3C: zwrócić uwagę, czy mają być przykręcane czy spawane. Możliwa kolizja z #30R0.",
        active: false
      },
      {
        id: 7,
        phrase: "Ampelsender",
        phraseOfficial: "Ampelsender",
        info:
          "Zabudowa anteny pod przodem pojazdu. Konieczne podanie wymiarów przez klienta. L4C: wzorcowe zabudowy: 33.#0ACV-B002 oraz 33.#0ACV-B017.",
        active: false
      },
      {
        id: 8,
        phrase: "Ampelbeinfl",
        phraseOfficial: "Ampelbeinflussung",
        info:
          "Zabudowa anteny pod przodem pojazdu. Konieczne podanie wymiarów przez klienta. L4C: wzorcowe zabudowy: 33.#0ACV-B002 oraz 33.#0ACV-B017.",
        active: false
      },
      {
        id: 9,
        phrase: "Dachlackierung",
        phraseOfficial: "Dachlackierung",
        info:
          "L4C: Do lakierowania z zewnątrz są dopuszczone tylko jasne kolory.  Można to sprawdzić na stronie: https://www.e-paint.co.uk/Lab_values.asp (Wartość 'L' musi być większa niż 30).",
        active: false
      },
      {
        id: 10,
        phrase: "tzliche Beschilderung",
        phraseOfficial: "Zusätzliche Beschilderung",
        info: "Naklejki na zbiornikach powietrza we właściwym języku.",
        active: false
      },
      {
        id: 11,
        phrase: "Sparschaltung bei abgeschalteten Motor",
        phraseOfficial: "Sparschaltung bei abgeschalteten Motor",
        info:
          "Dobranie właściwego piecyka na potrzeby zrealizowania życzenia - konieczne zadanie na HLK i Software.",
        active: false
      },
      {
        id: 12,
        phrase: "Konvektoren nicht verbauen",
        phraseOfficial: "Konvektoren nicht verbauen",
        info:
          "Konfiguracja KSW nie posiadająca żadnych konwektorów - konieczne złożenie całego układu HLK!",
        active: false
      },
      {
        id: 13,
        phrase: "glichen Einbau einer Rampe",
        phraseOfficial: "nachträglichen Einbau einer Rampe",
        info:
          "L4C: Życzenie klienta dla Hiszpani - seryjny szkielet wejścia dla elektrycznej rampy + KSW 33.#0JRV-B003.",
        active: false
      },
      {
        id: 14,
        phrase: "ndschloss auf I-Bedientaf",
        phraseOfficial: "Zündschloss auf I-Bedientafel",
        info:
          "L4C: ściana KSW #00KU + stacyjka na Bedientaffel. #009V Ohne Zundschloss zostaje!   Jeżeli jest VDV to się nie przejmuj. Typ deski rozdzielczej - nie wpływa na nasz obszar.",
        active: false
      },
      {
        id: 15,
        phrase: "Felgenlackierung",
        phraseOfficial: "Felgenlackierung",
        info: "Sprawdzić czy zasterowane felgi są odpowiednie (kolor).",
        active: false
      },
      {
        id: 16,
        phrase: "Radzierblendenlackierung",
        phraseOfficial: "Radzierblendenlackierung",
        info: "Kołpaki lakierowane.",
        active: false
      },
      {
        id: 17,
        phrase: "TPM",
        phraseOfficial: "TPM",
        info: "Czujniki ciśnienia w oponach - sprawdzić czy pasuje do kołpaków",
        active: false
      },
      {
        id: 18,
        phrase: "Tresor",
        phraseOfficial: "Tresor",
        info:
          "Schowek na przedzie pojazdu. Sprawdź czy nie ma jakichś specjalnych życzeń w związku z nim.",
        active: false
      },
      {
        id: 19,
        phrase: "Skikorbhalterung",
        phraseOfficial: "Skikorbhalterung",
        info:
          "Dodatkowy bagażnik na narty - sprawdzić czy są odpowiednie wzmocnienia w szkielecie.",
        active: false
      },
      {
        id: 20,
        phrase: "Reklametafel",
        phraseOfficial: "Reklametafel",
        info: "Reklamy na panelach - konieczne dopasowanie poszycia",
        active: false
      },
      {
        id: 21,
        phrase: "#1M80",
        phraseOfficial: "#1M80",
        info: "Obniżone obrysówki - konieczne dopasowanie poszycia",
        active: false
      },
      {
        id: 22,
        phrase: "Werbung",
        phraseOfficial: "Werbung",
        info: "Reklamy na panelach - konieczne dopasowanie poszycia",
        active: false
      },
      {
        id: 23,
        phrase: "Geschraubte SW Beplankung",
        phraseOfficial: "Geschraubte SW Beplankung",
        info:
          "L3C: zwróc uwagę, czy klient nie chce mieć przykręcanych paneli. Wówczas konieczne zadanie na Exterieur oraz Gerippe.",
        active: false
      },
      {
        id: 24,
        phrase: "hrkamera",
        phraseOfficial: "Rueckfahrkamera",
        info:
          "L4C: pod kodem z Ruckfahrkamera (np: 0IHAL) może znajdować się życzenie na kamery po bokach pojazdu. Wówczas konieczne jest przerobienie szkieletu pod mocowanie kamer po bokach pojazdu.",
        active: false
      },
      {
        id: 25,
        phrase: "Rotierende",
        phraseOfficial: "Rotierende",
        info: "Osłony elementów rotujących w silniku.",
        active: false
      },
      {
        id: 26,
        phrase: "Begehbares",
        phraseOfficial: "Begehbares",
        info: "Maty antypoślizgowe na dachu.",
        active: false
      },
      {
        id: 27,
        phrase: "Antirutschmatten",
        phraseOfficial: "Antirutschmatten",
        info: "Maty antypoślizgowe na dachu.",
        active: false
      },
      {
        id: 28,
        phrase: "Antislipper",
        phraseOfficial: "Antislipper",
        info: "Maty antypoślizgowe na dachu.",
        active: false
      },
      {
        id: 29,
        phrase: "Biodiesel",
        phraseOfficial: "Biodiesel",
        info:
          "Wygląda na to, że auto ma być zasilane BioDieslem. Pamiętaj o konieczności zasterowania piecyka z podgrzewanym filtrem paliwa.",
        active: false
      },
      {
        id: 30,
        phrase: "hter Lenkeinschlag ",
        phraseOfficial: "Erhöhter Lenkeinschlag ",
        info:
          "L3C: zwiększenie kąta kierowania. Prawdopodobnie trzeba zasterować pod kodem V030F VGR 36.#2560-B005, 36.#2490-B001, 81.#0300-1078",
        active: false
      },
      {
        id: 31,
        phrase: "Riffelblech",
        phraseOfficial: "Riffelblech",
        info:
          "Sterowanie VGR #2N10 do odpowiednich pkt podnoszenia (klient Francja/Belgia).",
        active: false
      },
      {
        id: 32,
        phrase: "Batteriefachklappe auf linker Seite",
        phraseOfficial: "Batteriefachklappe auf linker Seite",
        info:
          "L4C: klapa na baterie po lewej stronie. Konieczne zadanie na Gerippe oraz Exterieur (lub zastosowanie odpowiednich KV).",
        active: false
      },
      {
        id: 33,
        phrase: "UWE Schacht",
        phraseOfficial: "UWE Schacht",
        info:
          "Specjalne urządzenie do zewnętrznego grzania układu obiegu wody. Wzorcowa VGR: 33.#4260-B048",
        active: false
      },
      {
        id: 34,
        phrase: "Calix",
        phraseOfficial: "Calix",
        info: "Grzałka silnika - sugerowana VGR 51.#0500-0074",
        active: false
      }
    ],
    exceptions: [
      {
        phrase: "Ohne Felgenlackierung",
        phraseOfficial: "Felgenlackierung"
      },
      {
        phrase: "Ohne Radzierblendenlackierung",
        phraseOfficial: "Radzierblendenlackierung"
      },
      {
        phrase: "Ohne Reifendruck",
        phraseOfficial: "TPM"
      },
      {
        phrase: "Ohne Reifendruck",
        phraseOfficial: "TPM"
      },
      {
        phrase: "Ohne Tresor",
        phraseOfficial: "Tresor"
      },
      {
        phrase: "Ohne Skikorbhalterung",
        phraseOfficial: "Skikorbhalterung"
      },
      {
        phrase: "Ohne Reklametafelrahmen au",
        phraseOfficial: "Reklametafel"
      },
      {
        phrase: "Ohne Abdeckung rotierender",
        phraseOfficial: "Rotierende"
      },
      {
        phrase: "Biodieselanteil bis max. 7%",
        phraseOfficial: "Biodiesel"
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
    if (!this.state.newPhrase) return alert("Nie podano frazy");
    const newPhrase = {
      id: this.state.counter,
      phrase: this.state.newPhrase,
      phraseOfficial: this.state.newPhrase,
      info: `Znaleziono ${this.state.newPhrase}`,
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
          <p>Powered by Grzegorz Paprzycki (EBV-F)</p>
          {/* <button onClick={this.handleTestClick}>Test state</button> */}
        </footer>
      </div>
    );
  }
}

export default App;
