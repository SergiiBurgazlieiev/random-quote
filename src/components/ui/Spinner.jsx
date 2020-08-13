import React from 'react';
import UseAnimations from 'react-useanimations';
import loading2 from 'react-useanimations/lib/loading2';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #2c2c2c;
  }
`;

const Spinner = () => (
  <Container>
    <UseAnimations animation={loading2} size={50} />
  </Container>
);
export default Spinner;
