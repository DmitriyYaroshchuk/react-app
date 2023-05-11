import React from "react";
import Container from "../../containers/Container";
import Logo from "./Logo";
export default class Header extends React.Component {
    render() {
        return (
            <header>
                <Container>
                    <Logo/>
                </Container>
            </header>
        )
    }
}