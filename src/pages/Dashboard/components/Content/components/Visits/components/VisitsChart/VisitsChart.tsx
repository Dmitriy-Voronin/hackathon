import styles from './visitsChart.module.css'
import vistsChartImg from '../../../../../../../../assets/images/visits_chart.png'

type TVisitsChart = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const VisitsChart: React.FC<TVisitsChart> = ({ ...props }) => {
    return (
        <div className={styles.chart__container} {...props}>
            <img src={vistsChartImg} alt="vistsChartImg" />
            <span className={styles.green_line}>
                <svg xmlns="http://www.w3.org/2000/svg" width="349" height="122" viewBox="0 0 349 122" fill="none">
                    <path d="M2.01485 102.426L75.2552 120.255L139.498 52.2043L208.78 62.2265L278.062 107.519L347.344 1.65213" stroke="#3AAA35" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            <span className={styles.grey_line}>
                <svg xmlns="http://www.w3.org/2000/svg" width="349" height="86" viewBox="0 0 349 86" fill="none">
                    <path d="M2.01298 46.1547L75.2534 2.25998L139.496 84.1102L208.778 5.95558L278.06 38.6518L347.342 20.9613" stroke="#E6E8EC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </div>

    )
}