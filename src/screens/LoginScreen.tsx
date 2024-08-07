import React, { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

//interface - formulario Login
interface FormLogin {
    email: string;
    password: string;
}

export const LoginScreen = () => {
    //hook useState: cambiar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    //función actualizar el estado del formulario
    const handleSetValues = (name: string, value: string) => {
        setFormLogin({ ...formLogin, [name]: value })
    }

    //función para iniciar sesión
    const handleSingIn = () => {
        console.log(formLogin);
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponent>
                <View>
                    <Text style={styles.titleBody}>Bienvenido de nuevo!</Text>
                    <Text style={styles.descriptionBody}>Realiza tus compras de manera rápida y segura</Text>
                </View>
                <View style={styles.contentInputs}>
                    <InputComponent
                        placeholder='Correo'
                        handleSetValues={handleSetValues}
                        name={'email'} />
                    <InputComponent
                        placeholder='Contraseña'
                        handleSetValues={handleSetValues}
                        name={'password'}
                        isPassword={true} />
                </View>
                <ButtonComponent textButton='Iniciar' onPress={handleSingIn} />
            </BodyComponent>
        </View>
    )
}
