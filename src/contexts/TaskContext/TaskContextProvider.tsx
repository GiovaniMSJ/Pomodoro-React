import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({children} : TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);

    const worker = TimerWorkerManager.getInstance()

    useEffect(() => {
        worker.onmessage((e) => {
            const countDownSeconds = Number(e.data)

            if (countDownSeconds <= 0) {
                dispatch({
                    type: TaskActionTypes.COMPLETED_TASK
                })
                worker.terminate()
                return
            }

            dispatch({
                type: TaskActionTypes.COUNT_DOWN,
                payload: { secondsRemaining : countDownSeconds}
            })
        })
    }, [worker])


    useEffect(() => {
        if(!state.activeTask){
            worker.terminate()
            return
        }

        worker.postMessage(state)
    }, [worker, state])

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    ) 
}
