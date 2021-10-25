import {
  Container,
  Content,
  OptionButton,
  Result,
  TemperatureUnit,
} from "./styles";
import { useState } from "react";

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
            Insira a temperatura que você quer converter, e o resultado
            aparecerá ao lado.
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
            </div>
            <Result>
              <span>{calculateDegree()}</span>
            </Result>
          
        </Content>
      </Container>
    </header>
  );
}
