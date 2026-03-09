import type { TaskStateModel } from "../../Models/TaskStateModel";
import { TaskActionTypes, type TaskAcionModel } from "./taskActions";

export function taskReducer(state: TaskStateModel, action: TaskAcionModel): TaskStateModel {
    switch(action.type){
        case TaskActionTypes.START_TASK: {
            return state
        }
        case TaskActionTypes.INTERRUPT_TASK: {
            return state
        }
        case TaskActionTypes.RESET_STATE: {
            return state
        }
    }


    return state

}