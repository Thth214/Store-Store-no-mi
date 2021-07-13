import React from 'react';
import styled from 'styled-components'
import {useNavigation} from '@react-navigation/native'
import XIcon from '../../assets/x.svg'
const Container = styled.View`
background-color: #141414;
flex: 1 0 21%; 
margin: 5px;
height: 100px;
`;
const FruitButton = styled.TouchableOpacity``;
const FruitImage = styled.Image`
width: 88px;
height: 88px;
border-radius: 20px;
`;
const DeleteButton = styled.TouchableOpacity``;

const TreasureCard = ({data}) => {
        console.log(data)
    return(
        
        <Container>
            <FruitButton>
                <FruitImage source={{uri:data.imagemFruta}}/>
            </FruitButton>
            <DeleteButton>
                 <XIcon fill="#ffffff"/>
            </DeleteButton>
        </Container>
    );
}

export default TreasureCard

