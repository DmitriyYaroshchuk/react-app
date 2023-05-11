import Container from "../../containers/Container";
import Navigation from "./Navigation";
import MainContainer from "../../containers/MainContainer";
import Form from "../Form/Form";
import React from "react";

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Container>
                    <MainContainer>
                        <Navigation/>
                        <Form/>
                    </MainContainer>
                </Container>
            </main>
        )
    }
}