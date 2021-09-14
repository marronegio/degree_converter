import { Container, Content, OptionButton } from "./styles";
import { useState } from "react";

enum Options {
  CELSIUS_TO_FAHRENHEIT = "CELSIUS_TO_FAHRENHEIT",
  FAHRENHEIT_TO_CELSIUS = "FAHRENHEIT_TO_CELSIUS",
}

export function PageBody() {
  const [selectedOption, setSelectedOption] = useState<Options>();

  return (
    <header>
      <Container>
        <Content>
          <div className="option-buttons">
            <OptionButton
              onClick={() => setSelectedOption(Options.CELSIUS_TO_FAHRENHEIT)}
              isSelected={selectedOption === Options.CELSIUS_TO_FAHRENHEIT}
              type="button"
            >
              Celsius para Fahrenheit
            </OptionButton>
            <div className="divider" />
            <OptionButton
              onClick={() => setSelectedOption(Options.FAHRENHEIT_TO_CELSIUS)}
              isSelected={selectedOption === Options.FAHRENHEIT_TO_CELSIUS}
              type="button"
            >
              Fahrenheit para Celsius
            </OptionButton>
          </div>
          <p>
            Insira a temperatura que você quer converter, e o resultado
            aparecerá ao lado.
          </p>
          <input type="number" />
        </Content>
      </Container>
    </header>
  );
}
