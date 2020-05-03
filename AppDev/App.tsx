/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components/native';
import {CustomButton} from './CustomButton';

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: palevioletred;
`;

function App() {
  return (
    <Container>
      <StyledText>React Native with 💅 Styled Components</StyledText>
      <CustomButton
        text="Click Me"
        textColor="#01d1e5"
        backgroundColor="lavenderblush"
      />
    </Container>
  );
}

export default App;
