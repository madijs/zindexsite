import styles from '../../assets/features/features.module.scss'
import {useTranslation} from "react-i18next";
import FeatureSlide from "./featureSlide/FeatureSlide";
import React from 'react'


export default function Features() {
    const { t } = useTranslation();
    return(
        <div className={styles.features}>
            <div className={styles.container}>
                <h2 className={styles.title_header}>{t('features.features-title')}</h2>
                <p className={styles.features__text}>{t('features.features-sub')}</p>
                <FeatureSlide/>
            </div>
        </div>
    )
}