import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller, FieldError, Merge } from 'react-hook-form';
import { Container, TextError } from './styles';

interface Props extends TextInputProps{
    name: string;
    control: Control;
    rules?: object;
}

export function Input({name, control, rules, ...rest}: Props) {
    return(
        <>
            <Controller
                control={control}
                render={({field: {onChange,value}})=> (
                    <Container
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />  
                )}
                name={name}
                rules={rules}
            />
        </>    
    )
}