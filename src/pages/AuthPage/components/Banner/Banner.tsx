import styles from './banner.module.css'

type TBunner = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Banner: React.FC<TBunner> = ({ className, ...props }) => {
    return (
        <section className={styles.banner}>
            <div className={['container', className].join(' ')} {...props}>
                <div className={styles.banner__wrap}>
                    <h1 className={styles.banner__title}>
                        Не попадись мошеннику!
                    </h1>
                </div>
            </div>
        </section>
    )
}