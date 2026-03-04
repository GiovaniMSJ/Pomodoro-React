import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleTypes';
import styles from './styles.module.css';

export function Cycles() {
    const {state} = useTaskContext()    

    const cycleSteps = Array.from({ length: state.currentCycle })

    const cycleDescriptionMap = {
        workTime: 'Foco',
        shortBreakTime: 'Descanso curto',
        longBreakTime: 'Descanso longo'
    }

    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>
            <div className={styles.cyclesDots}>
                {cycleSteps.map((_, index) => {
                    const nextCycle = getNextCycle(index)
                    const nextCycleType = getNextCycleType(nextCycle)
                    return (
                    <span 
                    key={`${index}`}
                    className={`${styles.cyclesDot} ${styles[nextCycleType]}`}
                    aria-label={`Indicador de ciclo de de ${cycleDescriptionMap[nextCycleType]}`}
                    title={`Indicador de ciclo de de ${cycleDescriptionMap[nextCycleType]}`}
                    ></span>
                )
                } )}
            </div>
        </div>
    )
}