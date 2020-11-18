import styles from "../assets/services/ProductItem.module.scss"
import {useTranslation} from "react-i18next";


export default function ProductItem({title,description,openModal,id,image,price}) {
    const {t} = useTranslation();
    return(
            <div onClick={()=>openModal(title)} style={id%2===0 ? {color:"#fff",background: 'linear-gradient(180deg, #2C62F5 -27.08%, #A426E2 118.19%)'} : {}} className={styles.item_container}>
                <div className={styles.product_logo}>
                    <img src={image} alt=""/>
                </div>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.description}>
                    {description}
                </div>
                <div style={id%2===0 ? {backgroundColor: "#fff",color:'#7444EA'} : {background: 'linear-gradient(180deg, #2C62F5 -27.08%, #A426E2 118.19%)',color:"#fff"}} className={styles.price}>{price}</div>
                <div style={id%2===1 ? {backgroundColor:"#4F55EF",color:"#fff"} : {backgroundColor:"#fff",color:"#4F55EF"}} className={styles.order_btn}>{t("service.order_btn")}</div>
            </div>
    )
}