import React from 'react';
import { Container, Title } from './styles';

interface HeaderProps{
    screenName: string
}

export function Header ({screenName} : HeaderProps){
    return(
        <Container>
            <Title>{screenName}</Title>
        </Container>
    )
}