import styles from './transfers.module.css'

type TTransfers = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    list: {
        city: string
        value: number
    }[]
}


export const Transfers: React.FC<TTransfers> = ({ list, ...props }) => {
    return (
        <div className={styles.transfers__container} {...props}>
            <h2 className={styles.transfers__title}>Сеансы по устройствам</h2>
            <div className={styles.descr}>
                <span className={styles.descr_item}>Если перевод показался вам подозрительным</span>
                <span className={styles.descr_item}>Не одобряйте его!</span>
            </div>
            <ul className={styles.list}>
                {list.map((item) => (
                    <li className={styles.list__item}>
                            <span className={styles.list__item_city}>{item.city}</span>
                            <span className={styles.list__item_value}>{item.value} руб</span>
                    </li>
                ))}
            </ul>
        </div>

    )
}