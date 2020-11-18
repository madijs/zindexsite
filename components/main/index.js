import Link from "next/link";
import {useTranslation} from 'react-i18next';
import PartnerSlide from "./PartnerSlide/PartnerSlide";
import styles from "../../../assets/mainPage/main/main.module.scss"

export default function Main({stars}) {
    const {t} = useTranslation();

    return (
        <div className={styles.main}>
            <div className={styles.main_content}>
                <div className={styles.container}>
                    <div className={styles.main_title}>
                        <h1 className={styles.main_title__header}>{t('mainPageTitleHeader')}</h1>
                        <p className={styles.main_title__text}>{t('mainPageTitleText')}</p>
                        <div className={styles.main_btns}>
                            <Link href="/ogpo-vts">
                                <div className={'btn icon ' + styles.icon_calc}>{t('calculateInsurance')}</div>
                            </Link>
                            <Link href="/road-assistance">
                                <div className={'btn ' + styles.btn_help}>{t('needRoadAssistance')}</div>
                            </Link>
                        </div>
                        <div className={styles.btn_help__text}>{t('needRoadAssistanceSub1')}</div>
                        <div className={styles.btn_help__text2}>{t('needRoadAssistanceSub2')}</div>
                        <div className={styles.btn_help_img}><img src="/ui/btn-help__text-arrow.svg" alt="img"/></div>
                        <PartnerSlide/>
                    </div>
                    <div className={styles.main_img}>
                        <img src="/images/macbook.webp" className={styles.main_img__macbook} alt="macbook"/>
                        <img src=" /images/iphone.webp" className={styles.main_img__iphone} alt="iphone"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

Main.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
}