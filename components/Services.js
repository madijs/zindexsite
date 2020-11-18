import styles from '../../assets/services/Services.module.scss'
import ProductItem from "./ProductItem";

export default function Services() {
    return(
        <div className={styles.service_container}>
            <div className={styles.service_title}>Что мы можем вам предложить?</div>
            <div className={styles.service_subtitle}>Базовые пакеты</div>
            <div className={styles.products_list}>
                <ProductItem
                    image={'/icon1.png'}
                    title={"Сайт-визитка"}
                    description={"Ваша визитка в интернете,\n" +
                    "цель которой рассказать о\n" +
                    "существовании Вашей\n" +
                    "компании"}
                    price={"от 90 000₸"}
                />
                <ProductItem
                    image={'/icon2.png'}
                    title={"Интернет магазин"}
                    description={"Сайт, Вашей личной\n" +
                    "торговой площадки"}
                    price={"от 120 000₸"}
                />
                <ProductItem
                    image={'/icon3.png'}
                    title={"Landing page"}
                    description={"Одностраничный\n" +
                    "продающий сайт, с\n" +
                    "формами заявок и\n" +
                    "обратного звонка"}
                    price={"от 60 000₸"}
                />
            </div>
        </div>
    )
}