import { useState } from 'react'
import { Home } from './pages/Home'

import './styles/global.css'
import './styles/theme.css'
import type { TaskStateModel } from './Models/TaskStateModel'

const initalState : TaskStateModel = {
    tasks: [],
    secondsRemainig: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config : {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    },
}

export function App () {
    const [state, setState] = useState(initalState);

    return <Home state={state} setState={setState} />
}
