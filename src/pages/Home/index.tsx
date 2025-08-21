import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainTemplate } from "../../templates/MainTemplate";
import { MainForm } from "../../components/MainForm";

export function Home () {

    return (
        <MainTemplate >
            <Container >
                <CountDown />
            </Container>

            <Container >
                <MainForm />
            </Container>
        </MainTemplate>       
    );
}