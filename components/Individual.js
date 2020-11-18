import styles from "../assets/Individual.module.scss"

export default function Individual() {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h4><span style={{color:"red"}}>Индивидуальный проект</span>.Разрабатываем сложные, индивидуальные проекты под Ваши требования в <span style={{color:"red"}}>сжатые сроки</span>.</h4>
            </div>
            <div className={styles.btn}>
                <button>
                    Узнать стоимость проекта
                </button>
            </div>
        </div>
    )
}