import { Button } from '../../../../../../components/ui/Button'
import { Chart } from './components/Chart'
import { TimeOfDay } from './components/TimeOfDay'
import styles from './sessions.module.css'

type TSessions = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    dates: string
}

const list = [
    {
        timeOfDay: 'После 12:00',
        fill: '#5A6ACF',
        value: 40
    },
    {
        timeOfDay: 'Вечером',
        fill: '#8593ED',
        value: 40
    },
    {
        timeOfDay: 'Днём',
        fill: '#C7CEFF',
        value: 40
    },

]

export const Sessions: React.FC<TSessions> = ({ dates, ...props }) => {
    return (
        <div className={styles.sessions__container} {...props}>
            <h2 className={styles.sessions__title}>Сеансы по устройствам</h2>
            <span className={styles.dates}>От {dates}</span>
            <Chart />
            <TimeOfDay list={list} />
            <Button className={styles.report_btn}>
                View Report
            </Button>
        </div>

    )
}