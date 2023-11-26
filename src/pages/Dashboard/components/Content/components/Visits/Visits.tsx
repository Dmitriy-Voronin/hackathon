import { Button } from '../../../../../../components/ui/Button'
import { Icons } from '../../../../../../components/ui/Icons'
import { Marker } from '../../../../../../components/ui/Marker'
import { VisitsChart } from './components/VisitsChart'
import styles from './visits.module.css'

type TVisits = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    dates: string
    count: number
    value: number
}

// const list = [
//     {
//         timeOfDay: 'После 12:00',
//         fill: '#5A6ACF',
//         value: 40
//     },
//     {
//         timeOfDay: 'Вечером',
//         fill: '#8593ED',
//         value: 40
//     },
//     {
//         timeOfDay: 'Днём',
//         fill: '#C7CEFF',
//         value: 40
//     },

// ]

export const Visits: React.FC<TVisits> = ({ dates, value, count, ...props }) => {
    return (
        <div className={styles.visits__container} {...props}>
            <h2 className={styles.visits__title}>Посещения приложения</h2>
            <span className={styles.count}>{count}</span>
            <span className={styles.value_wrap}>
                {Icons.arrow_down}<span className={styles.value}>{value}%</span> vs last week</span>
            <span className={styles.dates}>Sales from {dates}</span>
            <VisitsChart />
            <div className={styles.chart_info}>
                <div className={styles.chart_info_item}>
                    <Marker fill={'var(--green-seduction)'} />
                    <span className={styles.chart_info_item_descr}>Последние 6 дней</span>
                </div>
                <div className={styles.chart_info_item}>
                    <Marker fill={'var(--silver-setting)'} />
                    <span className={styles.chart_info_item_descr}>Последняя неделя</span>
                </div>
            </div>
            <Button className={styles.report_btn}>
                View Report
            </Button>
        </div>

    )
}