import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR } from '../commons/constants';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//interface - props
interface Props {
    users: User[];  //arreglo con la lista de usuarios
    handleAddUser: (user: User) => void;  //función para agregar usuarios al arreglo
}

//interface - formulario Registro
interface FormRegister {
    email: string;
    password: string;
}

export const RegisterScreen = ({ users, handleAddUser }: Props) => {

    //hook useState: manipular el estado del formulario
    const [formRegister, setFormRegister] = useState<FormRegister>({
        email: '',
        password: ''
    });

    //hook useState: manipular la visualización o no del password
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //hook useNavigation: permite navgar de una pantalla a otra
    const navigation = useNavigation();

    //función actualizar el estado del formulario
    const handleSetValues = (name: string, value: string) => {
        setFormRegister({ ...formRegister, [name]: value });
    }

    //función registrar nuevos usuarios 
    const handleSignUp = () => {
        //Validando que los campos del formulario no estpen vacíos
        if (!formRegister.email || !formRegister.password) {
            //Mensaje de aviso
            Alert.alert(
                'Error',
                'Por favor, ingrese valores en todos los campos!'
            );
            return;
        }

        //Validando que el usuario no se encuentre registrado
        if (verifyUser() != null) {
            Alert.alert(
                'Error',
                'El correo ya se encuentra registrado!'
            );
            return;
        }

        //Generar la información del nuevo usuario (objeto - User)
        //Arreglo con los ids del usuario
        const getIdUsers = users.map(user => user.id); //[1,2]
        //Generar el id para el nuevo usuario
        const getNewId = Math.max(...getIdUsers) + 1;
        // Crear el nuevo usuario - nuevo objeto usuario
        const newUser: User = {
            id: getNewId,
            email: formRegister.email,
            password: formRegister.password
        };
        //Agregando el nuevo usuario al arreglo
        handleAddUser(newUser);
        Alert.alert(
            'Felicitaciones',
            'Registro exitoso!'
        );
        navigation.goBack();
        //console.log(formRegister);
    }

    //función para validar que el usuario no esté registrado
    const verifyUser = () => {
        const existUser = users.filter(user => user.email === formRegister.email)[0];
        return existUser; // User | null
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Regístrate' />
            <BodyComponent>
                <View>
                    <Text style={styles.titleBody}>Estás muy cerca!</Text>
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
                        isPassword={hiddenPassword}
                        hasIcon={true}
                        accionIcon={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent textButton='Registrar' onPress={handleSignUp} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text
                        style={styles.textRedirection}>
                        Ya tienes una cuenta? Iniciar sesión ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
