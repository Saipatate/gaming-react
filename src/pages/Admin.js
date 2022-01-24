import React from 'react';
import styled from 'styled-components';

const Admin = () => {
    return (
        <Container>
            <BoxTopContainer>
                <BoxTop>
                    <Title>Visite sur le site</Title>
                    <Paragraph>2 000 visite par jours</Paragraph>
                </BoxTop>
                <BoxTop>
                    <Title>Materiel vendu</Title>
                    <Paragraph>5 600 materiel vendu ce mois si</Paragraph>
                </BoxTop>
                <BoxTop>
                    <Title>Argent Gagner ce mois si</Title>
                    <Paragraph>20 000 €</Paragraph>
                </BoxTop>
            </BoxTopContainer>
        </Container>
    );
};

const Container = styled.div`
  padding: 0 3%;
  display: flex;
  justify-content: center;
`

const BoxTopContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const BoxTop = styled.div`
    background: linear-gradient(180deg, #ff006a, #ff5a9e);
    width: 380px;
    height: 180px;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:nth-child(2) {
        background: linear-gradient(180deg, #ff0000, #ff4b4b);
    }

    &:nth-child(3) {
        background: linear-gradient(180deg, #14ff5c, #45ff7e);
    }
`

const Title = styled.h2`
    color: #fff;
`

const Paragraph = styled.p`
    color: #fff;
    font-weight: 600;
`

export default Admin;