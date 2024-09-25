import React from "react";
import { Container,
         ContainerTop,
         ContainerBottom,
         ContainerLeft,
         ContainerRight,
         Name,
         Text,
         CategoryTitle,
         ImageSupplier} from "./styles";

export interface SupplierCardProps{
    name: string, 
    email: string, 
    category:  string, 
    image: string,
    address: string,
    number: string | any
}                

export function SupplierCard({name, email, category, image, number, address}:SupplierCardProps){
    return (
        <Container>
            <ContainerTop>
                <Name>{name}</Name>
            </ContainerTop>

            <ContainerBottom>
                <ContainerLeft>
                    <Text>{email}</Text>
                    <Text>{number}</Text>
                    <Text>{address}</Text>
                    <CategoryTitle>{category}</CategoryTitle>
                    
                </ContainerLeft>

                <ContainerRight>
                    {image ? (
                        <ImageSupplier
                            source={{ uri:image}}
                            resizeMode="cover"
                        />
                    ) : (
                        <ImageSupplier
                            source={require('../../assets/images/logoMeeting.png')}
                        />
                    )}
                </ContainerRight>
            </ContainerBottom>
            
        </Container>
    )
}