import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  background-color: var(--dark);
  width: 100%;
  height: 280px;
  color: white;
  user-select: none;
`;
export const Content = styled.div`
  margin: 0;
  padding: 0;
  max-width: 1120px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-self: center;
  font-size: 2rem;
  p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`;
