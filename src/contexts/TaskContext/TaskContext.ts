import { createContext } from "react";
import type { TaskStateModel } from "../../Models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import type { TaskAcionModel } from "./taskActions";


type TaskContextProps = {
    state: TaskStateModel,
    dispatch: React.Dispatch<TaskAcionModel>
}

const initialContextValues = {
    state: initialTaskState,
    dispatch: () => {},
}

export const TaskContext = createContext<TaskContextProps>(initialContextValues)

