import styles from './chart.module.css'

type TChart = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> 

export const Chart: React.FC<TChart> = ({ ...props }) => {
    return (
        <div className={styles.chart__container} { ...props }>
            <svg xmlns="http://www.w3.org/2000/svg" width="191" height="190" viewBox="0 0 191 190" fill="none">
                <circle cx="92.5652" cy="98.0777" r="79.9068" stroke="#C7CEFF" strokeWidth="24" />
                <path d="M92.0848 18C136.216 18 171.992 53.7755 171.992 97.9068C171.992 142.038 136.216 177.814 92.0848 177.814C56.4953 177.814 26.3401 154.547 16 122.394" stroke="#8593ED" strokeWidth="24" />
                <path d="M92.5652 18.1709C136.697 18.1709 172.472 53.9464 172.472 98.0777C172.472 124.22 159.918 147.431 140.509 162.009" stroke="#DEE1F4" strokeWidth="36" />
                <path d="M92.5652 18.1709C136.697 18.1709 172.472 53.9464 172.472 98.0777C172.472 124.22 159.918 147.431 140.509 162.009" stroke="#5A6ACF" strokeWidth="24" />
            </svg>
        </div>

    )
}