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
import IconUser from '../../assets/user.svg';
import { useNavigation } from '@react-navigation/native';
export default () => {
    const[email,SetEmail] = useState('');
    const[password,SetPassword] = useState('');
    const[name,SetName] = useState('');
    const navigation = useNavigation();
    const handleMessageClick = () =>{
    navigation.reset({
        routes:[{name:'SignIn'}]
    })
    }
    const handleLoginClick =()=>{

    }
    return (
        <Container>
            <Bau/>
            <InputArea>
            <InputSign IconSvg={IconUser} placeholder='Nome Completo' value={name} onChangeText={t=>SetName(t)}/>
            <InputSign IconSvg={IconEmail} placeholder='Email' value={email} onChangeText={t=>SetEmail(t)}/>
            <InputSign IconSvg={IconLock} placeholder='Senha' value={password} onChangeText={t=>SetPassword(t)} password={true}/>
            <CustomButton onPress={handleLoginClick} >
                <CustomButtonText>Cadastre-se</CustomButtonText>
            </CustomButton>
            </InputArea>
            <SignMessage onPress={handleMessageClick}>
                <SignMessageText>Ja possui uma conta ? </SignMessageText>
                <SignMessageBold>Login</SignMessageBold>
            </SignMessage>
        </Container>
    );
}