import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";
import { loadBeep } from "../../utils/loadBeep";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({children} : TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);
    const playbeepRef = useRef<ReturnType<typeof loadBeep> | null>(null)

    const worker = TimerWorkerManager.getInstance()

    useEffect(() => {
        worker.onmessage((e) => {
            const countDownSeconds = Number(e.data)

            if (countDownSeconds <= 0) {
                if(playbeepRef.current) {
                    playbeepRef.current()
                    playbeepRef.current = null
                }
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

    useEffect(() => {
        if (state.activeTask && playbeepRef.current === null) {
            playbeepRef.current = loadBeep()
        } else {
            playbeepRef.current = null
        }
    }, [state.activeTask])

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    ) 
}
