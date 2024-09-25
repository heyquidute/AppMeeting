import React from "react";
import { ActivityIndicator } from "react-native";
import { Container, LoadingIndicator } from "./styles";

interface LoadingTypes{
    background: string,
    loadColor: string
}

export function Loading({background, loadColor}: LoadingTypes){
    return (
        <Container background={background}>
            <LoadingIndicator loadColor={loadColor}/>
        </Container>
    )
}