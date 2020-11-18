import styles from '../../assets/Footer.module.scss'
import {useTranslation} from "react-i18next";

export default function Footer({executeScroll2,executeScroll}) {
    const {t} = useTranslation();
    return(
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.sub_container}>
                    <h2>{t("footer.our_contacts")}</h2>
                    <p>{t("footer.address")}</p>
                    <p>{t("footer.number")} <a style={{cursor:'pointer'}} href="tel:+77073240078">+77073240078</a>,<a style={{cursor:'pointer'}} href="tel:+77768222414">+77768222414</a></p>
                    <p>{t("footer.email")} zindexfactory@gmail.com</p>
                </div>
                <div className={styles.sub_container}>
                    <h2>{t("footer.work_time")}</h2>
                    <p>{t("footer.pn_pt")}  9:00-21:00</p>
                    <p>{t("footer.holidays")}  9:00-22:00</p>
                </div>
                <div className={styles.sub_container}>
                    <h2>{t("footer.about_us")}</h2>
                    <p onClick={executeScroll2} style={{cursor:"pointer"}}>{t("features.features-title")}</p>
                    <p onClick={executeScroll} style={{cursor:"pointer"}}>{t("service.service_title")}</p>
                </div>
            </div>
            <div className={styles.footer_contacts}>
                <div className={styles.footer_contacts_title}>{t("footer.contact_us")}</div>
                <div className={styles.footer_contacts_logo_div}>
                    <a href="https://www.instagram.com/zindex.kz/" target="_blank"><div className={styles.footer_contacts_logo}><img src="/instagram.png" alt="instagram"/></div></a>
                    <a href="https://wa.me/+77073240078" target="_blank"><div className={styles.footer_contacts_logo}><img src="/whatsapp.png" alt="whatsapp"/></div></a>
                </div>
            </div>
        </div>
    )
}