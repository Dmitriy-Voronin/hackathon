import { Marker } from '../../../../../../../../components/ui/Marker'
import styles from './timeOfDay.module.css'

type TTimeOfDay = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    list: {
        timeOfDay: string
        fill: string
        value: number
    }[]
}

export const TimeOfDay: React.FC<TTimeOfDay> = ({ list, ...props }) => {
    return (
        <div className={styles.timeOfDay__container} {...props}>
            <ul className={styles.list}>
                {list.map((item) => (
                    <li className={styles.list__item}>
                        <div className={styles.timeOfDay}>
                            <Marker fill={item.fill}/>
                            <span className={styles.timeOfDay__text}>{item.timeOfDay}</span>
                        </div>
                        <span className={styles.timeOfDay__value}>{item.value}%</span>
                    </li>
                ))}
            </ul>

        </div>

    )
}