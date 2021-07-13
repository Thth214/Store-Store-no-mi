import React,{useContext} from 'react'
import {Text} from 'react-native'
import {Container,CardContainer} from './styles';
import TreasureContext from '../../contexts/TreasureContext'
import TreasureCard from '../../components/TreasureCard';

const Home = () =>{
    const context = useContext(TreasureContext)

    console.log(context.treasure)
    
    return(
        <Container>
            <CardContainer>
            {context.treasure.map((fruta, k) => (
                        <TreasureCard key={k} data={fruta} />
                    ))}
            </CardContainer>
        </Container>
    );
}

export default Home;