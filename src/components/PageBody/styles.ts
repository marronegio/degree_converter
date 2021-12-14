import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  width: 100%;
  /* height: 960px; */
  padding-bottom: 3rem;

  @media (max-width: 720px) /* Mobile */ {
    .page-title {
      width: 85%;
      margin: 0 auto;
      margin-top: 2rem;
    }

    .subtitle {
      margin-top: 0.5rem;
      font-size: 80%;
      text-align: center;
      color: white;
      font-weight: 700;
      font-size: .9rem;
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 720px) /* Tablet */ {
    .page-title {
      width: 85%;
      margin: 0 auto;
      margin-top: 2rem;
    }

    .subtitle {
      margin-bottom: 3rem;
      margin-top: 0.5rem;
      font-size: 80%;
      text-align: center;
      color: white;
      font-weight: 700;
      font-size: 1.1rem;
      margin-top: -0.5rem;
      margin-bottom: 3rem;
    }
  }
  @media (min-width: 960px) /* Desktop */ {
    .page-title {
      width: 40%;
      min-width: 540px;
      margin: 0 auto;
      margin-top: 2rem;
    }

    .subtitle {
      text-align: center;
      color: white;
      font-weight: 700;
      font-size: 1.1rem;
      margin-top: -0.5rem;
      margin-bottom: 2rem;
    }
  }
`;
export const Content = styled.div`
  .creator-area {
    color: white;
    margin-top: 1.5rem;

    p {
      margin-bottom: 0.2rem;
    }

    .social {
      gap: 3rem;
      width: fit-content;
      margin: 0 auto;
    }
    .github-link {
      width: 2rem;
      margin-right: 0.5rem;
      opacity: 50%;
      transition: ease-in-out 200ms;

      :hover {
        border: 1px solid var(--orange);
        border-radius: 50%;
        opacity: 100%;
      }
    }
    .linkedin-link {
      width: 2rem;
      margin-left: 0.5rem;
      opacity: 50%;
      transition: ease-in-out 200ms;

      :hover {
        border: 1px solid var(--orange);
        border-radius: 50%;
        opacity: 100%;
      }
    }
  }

  input {
    border-radius: 1rem;
  }

  @media (max-width: 720px) /* Mobile */ {
    margin-left: 8%;
    margin-right: 8%;
    margin: 0 auto;
    max-width: 80%;
    display: flex;
    margin-top: 2rem;
    font-size: 2rem;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    border: 1px solid #ffaa29;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: #242424;

    .option-buttons {
      display: flex;
    }

    .divider {
      width: 1.5rem;
      height: auto;
      display: inline-block;
    }

    .instructions {
      margin-bottom: 1.5rem;
      text-align: center;
      color: white;
      font-size: 1rem;
    }

    input {
      width: 100px;
      height: 60px;
      font-size: 2rem;
      margin-left: 1rem;
      text-align: center;
      -webkit-appearance: none;
      -moz-appearance: textfield;
    }
    .input-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .input-and-unit {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .tutorial-title {
      color: white;
      margin-top: 1rem;
      font-size: 1.5rem;
      text-align: center;
    }

    .tutorial-cards {
      margin-top: 2.37rem;
      display: flex;
      flex-direction: column;
      gap: 2.8rem;
    }

    .tutorial-card {
      background-color: #333333;
      color: white;
      padding: 1.2rem;
      border-radius: 30px;
      text-align: center;
      width: 100%;
    }

    .card-title {
      font-size: 1.3rem;
      margin-bottom: 1.8rem;
      font-weight: 700;
    }

    .card-formula {
      color: var(--orange);
      margin-top: 1.8rem;
      font-size: 1.25rem;
    }

    .creator-area {
      p {
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
    }
  }

  @media (min-width: 720px) /* Tablet */ {
    margin-left: 8%;
    margin-right: 8%;
    margin: 0 auto;
    max-width: 80%;
    display: flex;
    margin-top: 2rem;
    font-size: 2rem;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    border: 1px solid #ffaa29;
    padding-left: 3rem;
    padding-right: 3rem;
    background-color: #242424;

    .option-buttons {
      display: flex;
    }

    .divider {
      width: 50px;
      height: auto;
      display: inline-block;
    }

    .instructions {
      margin-bottom: 2rem;
      text-align: center;
      color: white;
    }

    input {
      width: 140px;
      height: 80px;
      font-size: 3rem;
      text-align: center;
      -webkit-appearance: none;
      -moz-appearance: textfield;
    }
    .input-area {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .input-and-unit {
      display: flex;
      /* flex-direction: row; */
    }

    .tutorial-title {
      color: white;
      margin-top: 1rem;
      font-size: 2.25rem;
    }

    .tutorial-cards {
      margin-top: 2.37rem;
      display: flex;
      gap: 2.8rem;
      flex-direction: column;
    }

    .tutorial-card {
      background-color: #333333;
      color: white;
      padding: 1.2rem;
      border-radius: 30px;
      text-align: center;
    }

    .card-title {
      font-size: 1.6rem;
      margin-bottom: 1.8rem;
    }

    .card-formula {
      color: var(--orange);
      margin-top: 1.8rem;
      font-size: 1.25rem;
    }
  }

  @media (min-width: 960px) {
    margin-left: 8%;
    margin-right: 8%;
    margin: 0 auto;
    max-width: 80%;
    display: flex;
    margin-top: 2rem;
    font-size: 2rem;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    border: 1px solid #ffaa29;
    padding-left: 3rem;
    padding-right: 3rem;
    background-color: #242424;
    margin-top: 3rem;

    .option-buttons {
      display: flex;
    }

    .divider {
      width: 50px;
      height: auto;
      display: inline-block;
    }

    .instructions {
      margin-bottom: 2rem;
      text-align: center;
      color: white;
    }

    input {
      width: 140px;
      height: 80px;
      font-size: 3rem;
      text-align: center;
      -webkit-appearance: none;
      -moz-appearance: textfield;
    }
    .input-area {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .tutorial-title {
      color: white;
      margin-top: 1rem;
      font-size: 2rem;
    }

    .tutorial-cards {
      margin-top: 1rem;
      display: flex;
      gap: 2.8rem;
      flex-direction: row;
    }

    .tutorial-card {
      background-color: #333333;
      color: white;
      padding: 1.2rem;
      border-radius: 30px;
      width: 50%;
      height: 14rem;
      text-align: center;
      height: fit-content;
    }

    .card-title {
      font-size: 1.6rem;
      margin-bottom: 1.8rem;
    }

    .card-formula {
      height: 20%;
      margin: 0 auto;
      color: var(--orange);
      margin-top: 0.8rem;
      font-size: 1.25rem;
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
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: white;
  color: #252525;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 25px;
  border: none;
  transition: 100ms;
  margin-top: -3.2rem;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: var(--orange);
      color: white;
    `}

  @media (max-width: 719px) {
    width: 50%;
    height: fit-content;
    margin-bottom: 2rem;
    margin-top: -3rem;
    background-color: white;
    color: #252525;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.5rem;
    border: none;
    transition: 100ms;

    ${(props) =>
      props.isSelected &&
      css`
        background-color: var(--orange);
        color: white;
      `}
  }
`;
export const TemperatureUnit = styled.p`
  margin-left: 1rem;
  font-size: 3.3rem;
  font-weight: 700;
  color: white;

  @media (max-width: 719px) {
    margin-left: 1rem;
    font-size: 2rem;
  }
`;
export const Result = styled.p`
  margin-left: 1rem;
  font-size: 3.3rem;
  font-weight: 700;
  color: var(--orange);

  @media (max-width: 719px) {
    margin-top: 1rem;
    font-weight: 600;
    font-size: 3rem;
  }
`;
