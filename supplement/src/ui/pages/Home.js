import '../../Home.css';
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Wrapper from "../containers/Wrapper";
import React from "react";

class Home extends React.Component {
    render() {
        return(

                <Wrapper>
                    <Header/>
                    <Main/>
                </Wrapper>

        )
    }
}

export default Home;
