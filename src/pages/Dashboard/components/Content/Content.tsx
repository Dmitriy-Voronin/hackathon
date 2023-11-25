import { DashboardHeader } from './components/DashboardHeader'
import { Sessions } from './components/Sessions'
import styles from './content.module.css'

export const Content = () => {
    return (
        <div className={styles.dasboard__container}>
           <DashboardHeader />
            <main className={styles.main}>
                <section className={styles.info}>
                    <Sessions dates='1-6 ноября, 2023'/>
                    {/* <Transfers />
                    <Visits /> */}
                </section>
            </main>
        </div>

    )
}