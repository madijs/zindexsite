import styles from "../../assets/services/ProductItem.module.scss"
export default function ProductItem({title,description,price,image}) {
    return(
        <div className={styles.item_container}>
            <div className={styles.item_image}><img src={image} alt=""/></div>
            <div className={styles.item_title}>{title}</div>
            <div className={styles.item_description}>{description}</div>
            <div className={styles.item_price}>{price}</div>
            <div className={styles.item_btn}>Заказать</div>
        </div>
    )
}