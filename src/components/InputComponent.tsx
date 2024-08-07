import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../commons/constants';

//interface - props
interface Props {
    placeholder: string;
    handleSetValues: (name: string, value: string) => void;
    name: string;
    isPassword?: boolean;  //propiedad opcional
    hasIcon?: boolean;
}

export const InputComponent = ({ placeholder, handleSetValues, name, isPassword = false }: Props) => {

    return (
        <View>
            <Icon
                name='visibility'
                size={23}
                color={PRIMARY_COLOR}
                style={styles.iconPassword} />
            <TextInput
                placeholder={placeholder}
                keyboardType='default'
                onChangeText={(value) => handleSetValues(name, value)}
                secureTextEntry={isPassword}
                style={styles.inputText}
            />
        </View>
    )
}
