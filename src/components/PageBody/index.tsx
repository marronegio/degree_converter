import {
  Container,
  Content,
  OptionButton,
  Result,
  TemperatureUnit,
} from "./styles";
import { useState } from "react";
import title from "../../assets/title.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

enum Options {
  CELSIUS_TO_FAHRENHEIT = "CELSIUS_TO_FAHRENHEIT",
  FAHRENHEIT_TO_CELSIUS = "FAHRENHEIT_TO_CELSIUS",
}

export function PageBody() {
  const [selectedOption, setSelectedOption] = useState<Options>();
  const [degree, setDegree] = useState("");

  function celsiusToFahrenheit() {
    if (selectedOption === Options.CELSIUS_TO_FAHRENHEIT) {
      return <TemperatureUnit>°C =</TemperatureUnit>;
    }
    return <TemperatureUnit>°F =</TemperatureUnit>;
  }

  function calculateDegree() {
    if (selectedOption === Options.CELSIUS_TO_FAHRENHEIT) {
      const calc = (Number(degree) * 9) / 5 + 32;
      return `${calc.toFixed(2)} °F`;
    }
    const calc = ((Number(degree) - 32) * 5) / 9;
    return `${calc.toFixed(2)} °C`;
  }

  Number();

  return (
    <header>
      <Container>
      <img src={ title } alt="Degree Converter" className="page-title"/>
          <p className="subtitle">Conversor de temperatura celsius e fahrenheit</p>
        <Content>
          <div className="option-buttons">
            <OptionButton
              id="celsius-to-fahrenheit"
              onClick={() => setSelectedOption(Options.CELSIUS_TO_FAHRENHEIT)}
              isSelected={selectedOption === Options.CELSIUS_TO_FAHRENHEIT}
              type="button"
            >
              Celsius para Fahrenheit
            </OptionButton>
            <div className="divider" />
            <OptionButton
              id="fahrenheit-to-celsius"
              onClick={() => setSelectedOption(Options.FAHRENHEIT_TO_CELSIUS)}
              isSelected={selectedOption === Options.FAHRENHEIT_TO_CELSIUS}
              type="button"
            >
              Fahrenheit para Celsius
            </OptionButton>
          </div>
          <p className="instructions">
            <strong>
              Insira a temperatura que você quer converter, e o resultado
              aparecerá ao lado.
            </strong>
          </p>
          <div className="input-area">
            <input
              type="number"
              id="inputDegree"
              placeholder="0"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
            {celsiusToFahrenheit()}
            <Result>
              <span>{calculateDegree()}</span>
            </Result>
          </div>
          <h3 className="tutorial-title">Como fazer este cálculo?</h3>
          <div className="tutorial-cards">
            <div className="tutorial-card">
              <p className="card-title">Celsius para Fahrenheit</p>
              <p className="card-instructions">Primeiro, multiplique a temperatura em Celsius por 9. Então, divida o resultado por 5 e por fim, some 32 ao resultado. Logo abaixo você pode conferir  a fórmula desse cálculo:</p>
              <p className="card-formula">(0 °C × 9/5) + 32 = 32 °F</p>
            </div>
            <div className="tutorial-card">
              <p className="card-title">Fahrenheit para Celsius</p>
              <p className="card-instructions">Primeiro, subtraia  a temperatura em Fahrenheit em 32. Então, multiplique o resultado por 5 e por fim, divida o resultado por 9. Logo abaixo você pode conferir  a fórmula desse cálculo:</p>
              <p className="card-formula">(32 °F − 32) × 5/9 = 0 °C</p>
            </div>
          </div>
          <div className="creator-area">
            <p>Made by Giovanne Marrone</p>
            <div className="social">
            <a href="https://github.com/kovuzera" target="_blank" rel="noreferrer"><img src={ github } alt="ícone github" className="github-link"/></a>
            <a href="https://www.linkedin.com/in/giomarrone/" target="_blank" rel="noreferrer"><img src={ linkedin } alt="linkedin-link" className="linkedin-link"/></a>
            </div>
          </div>
        </Content>
      </Container>
    </header>
  );
}
