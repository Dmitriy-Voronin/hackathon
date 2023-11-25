import styles from './transfers.module.css'

type TTransfers = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> 


export const Transfers: React.FC<TTransfers> = ({ ...props }) => {
    return (
        <div className={styles.transfers__container} {...props}>

        </div>

    )
}