import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainTemplate } from "../../templates/MainTemplate";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../Models/TaskStateModel";

export type homeProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
    formattedSecondsRemaining: string
}

export function Home (props : homeProps) {

    return (
        <MainTemplate >
            <Container >
                <CountDown {...props} />
            </Container>

            <Container >
                <MainForm {...props} />
            </Container>
        </MainTemplate>       
    );
}