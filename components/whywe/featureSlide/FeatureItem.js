import styles from '../../../assets/features/featureItem.module.scss'
import React from 'react'

export default function FeatureItem({title,description,image,key}) {
    return(
        <div key={key} className={styles.item}>
            <div className={styles.itemTitle}>{title}</div>
            <div className={styles.itemDescription}>
                <div dangerouslySetInnerHTML={{__html:description}}/>
                <div><img src={image}/></div>
            </div>
        </div>
    )
}