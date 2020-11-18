import {useTranslation} from 'react-i18next';
import styles from "../../assets/main.module.scss"

export default function Main({executeScroll,modalIsOpen}) {
    const {t} = useTranslation();

    return (
        <>
        <div style={modalIsOpen ? {zIndex:'-1'}:{}} className={styles.main}>
            <div className={styles.main_content}>
                <div className={styles.container}>
                    <div className={styles.main_title}>
                        <h1 className={styles.main_title__header}>{t('mainPage.mainTitle')}</h1>
                        <p className={styles.main_title__text}>{t('mainPage.mainPageText')}</p>
                        <div onClick={executeScroll} className={styles.main_btns}>
                                <div onClick={executeScroll} className={'btn icon ' + styles.icon_calc}>{t('mainPage.showMore')}</div>
                        </div>
                    </div>
                    <div className={styles.main_img}>
                        <img src={"/first_icon.png"}/>
                    </div>
                </div>
            </div>
        </div>
            </>
    )
}
