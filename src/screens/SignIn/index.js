import React,{useState} from 'react';
import {
Container,
InputArea,
CustomButton,
CustomButtonText,
SignMessage,
SignMessageBold,
SignMessageText
} from './styles';
import Bau from '../../assets/bau.svg';
import InputSign from '../../components/InputSign/InputSign.js'
import IconEmail from '../../assets/emailicon.svg';
import IconLock from '../../assets/lockIcon.svg';
import { useNavigation } from '@react-navigation/native';
export default () => {
    const[email,SetEmail] = useState('');
    const[password,SetPassword] = useState('');
    const navigation = useNavigation();
    const handleMessageClick = () =>{
    navigation.reset({
        routes:[{name:'SignUp'}]
    })
    }
    const handleLoginClick =()=>{

    }
    return (
        <Container>
            <Bau/>
            <InputArea>
            <InputSign IconSvg={IconEmail} placeholder='Email' value={email} onChangeText={t=>SetEmail(t)}/>
            <InputSign IconSvg={IconLock} placeholder='Senha' value={password} onChangeText={t=>SetPassword(t)} password={true}/>
            <CustomButton onPress={handleLoginClick} >
                <CustomButtonText>LOGIN</CustomButtonText>
            </CustomButton>
            </InputArea>
            <SignMessage onPress={handleMessageClick}>
                <SignMessageText>Ainda não possui uma conta ? </SignMessageText>
                <SignMessageBold>Registre-se</SignMessageBold>
            </SignMessage>
        </Container>
    );
}