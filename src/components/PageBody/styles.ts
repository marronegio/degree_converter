import styled, { css } from "styled-components";

export const Container = styled.form`
  position: fixed;
  display: flex;
  background-color: var(--background);
  width: 100vw;
  height: 100vh;

  h1 {
    user-select: none;
  }
`;
export const Content = styled.div`
  margin: 0 auto;
  max-width: 80%;
  display: flex;
  margin-top: 2rem;
  font-size: 2rem;
  flex-direction: column;
  align-items: center;

  @media (max-width: 219px) {
    margin-left: 8%;
    margin-right: 8%;
  }

  .option-buttons {
    display: flex;
  }

  .divider {
    width: 80px;
    height: auto;
    display: inline-block;
  }

  .instructions {
    margin-bottom: 2rem;
    text-align: center;
  }

  input {
    width: 140px;
    height: 80px;
    font-size: 3rem;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: textfield;

    @media (max-width: 719px) {
      width: 76px;
      height: 50px;
      font-size: 1.5rem;
      text-align: center;
      -webkit-appearance: none;
      -moz-appearance: textfield;
    }
  }
  .input-area {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 719px) {
    .divider {
      width: 20px;
      height: auto;
      display: inline-block;
    }

    .instructions {
      margin-bottom: 2rem;
      text-align: center;
    }
  }
`;

interface OptionButtonProps {
  isSelected: boolean;
}

export const OptionButton = styled.button<OptionButtonProps>`
max-width: 400px;
  width: 30vw;
  height: 100px;
  margin-bottom: 2rem;
  background-color: var(--dark);
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  transition: 100ms;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: var(--orange);
    `}

  @media (max-width: 719px) {
    width: 140px;
    height: 60px;
    margin-bottom: 2rem;
    background-color: var(--dark);
    color: white;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.5rem;
    border: none;
    transition: 100ms;

    ${(props) =>
      props.isSelected &&
      css`
        background-color: var(--orange);
      `}
  }
`;
export const TemperatureUnit = styled.p`
  margin-left: 1rem;
  font-size: 3.3rem;

  @media (max-width: 719px) {
    margin-left: 1rem;
    font-size: 2rem;
  }
`;
export const Result = styled.p`
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 3.3rem;
  font-weight: 600;
  color: var(--orange);

  @media (max-width: 719px) {
    margin-top: 1rem;
    font-weight: 600;
    font-size: 3rem;
  }
`;
