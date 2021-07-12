import React,{useContext} from 'react'
import {Text} from 'react-native'
import {Container} from './styles';
import TreasureContext from '../../contexts/TreasureContext'

const Home = () =>{
    const context = useContext(TreasureContext)
    
    return(
        <Container>
            <Text>Treasure</Text>
        </Container>
    );
}

export default Home;