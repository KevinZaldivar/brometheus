import React from 'react';
import styled from 'styled-components/native';
import firestore from '@react-native-firebase/firestore';

const ButtonContainer = styled.TouchableOpacity<any>`
  width: 100px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
`;

const ButtonText = styled.Text<any>`
  font-size: 15px;
  color: ${(props) => props.textColor};
  text-align: center;
`;

export const CustomButton: React.SFC<{
  backgroundColor: string;
  textColor: string;
  text: string;
}> = ({backgroundColor, textColor, text}) => (
  <ButtonContainer
    onPress={() =>
      firestore()
        .collection('Users')
        .get()
        .then((querySnapshot) => {
          console.log('Total users: ', querySnapshot.size);

          querySnapshot.forEach((documentSnapshot) => {
            console.log(
              'User ID: ',
              documentSnapshot.id,
              documentSnapshot.data(),
            );
          });
        })
    }
    backgroundColor={backgroundColor}>
    <ButtonText textColor={textColor}>{text}</ButtonText>
  </ButtonContainer>
);
