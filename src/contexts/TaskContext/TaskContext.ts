import { createContext } from "react";
import type { TaskStateModel } from "../../Models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";


type TaskContextProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const initialContextValues = {
    state: initialTaskState,
    setState: () => {},
}

export const TaskContext = createContext<TaskContextProps>(initialContextValues)

