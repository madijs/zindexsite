import styles from '../assets/services/Services.module.scss'
import ProductItem from "./ProductItem";
import {useState,useEffect} from "react";
import {useTranslation} from "react-i18next";
import i18n from "i18next";




export default function  Services({openModal,language}) {
    const {t} = useTranslation();
    const [data,setData] = useState([
        {
            id:1,
            isFlipped:false,
            image:"/icon1.png",
            title: t("service.service_landing"),
            description: t("service.landing_desc"),
        },
        {
            id:2,
            isFlipped:false,
            image:"/icon2.png",
            title: t("service.service_visit"),
            description: t("service.visit_desc"),
        },
        {
            id:3,
            isFlipped:false,
            image:"/icon1.png",
            title: t("service.service_shop"),
            description: t("service.shop_desc"),
        },
        {
            id:4,
            isFlipped:false,
            image:"/icon2.png",
            title: t("service.service_kat"),
            description:  t("service.kat_desc"),
        },
        {
            id:5,
            isFlipped:false,
            image:"/icon1.png",
            title: t("service.service_mobile"),
            description: t("service.mobile_desc"),
        },
        {
            id:6,
            isFlipped:false,
            image:"/icon2.png",
            title: t("service.service_corp"),
            description: t("service.corp_desc"),
        }
    ]);

    useEffect(()=>{
        i18n.changeLanguage(language);
        setData(data)
    },[language]);


    return(
        <>
        <div className={styles.container}>
            <div className={styles.service_title}>
                <span>{t('service.service_title')}</span>
            <div className={styles.service_container}>
                    <ProductItem price={"от 60 000₸"} image={"/icon2.png"} id={0} openModal={openModal} title={t("service.service_landing")} description={t("service.landing_desc")} key={0}/>
                <ProductItem price={"от 250 000₸"} image={"/icon4.png"} id={5} openModal={openModal} title={t("service.service_mobile")} description={t("service.mobile_desc")} key={5}/>
                <ProductItem price={"от 70 000₸"} image={"/icon5.png"} id={2} openModal={openModal} title={t("service.service_kat")} description={t("service.kat_desc")} key={2}/>
                <ProductItem price={"от 200 000₸"} image={"/icon3.png"} id={3} openModal={openModal} title={t("service.service_shop")} description={t("service.shop_desc")} key={3}/>
                <ProductItem price={"от 120 000₸"} image={"/icon6.png"} id={4} openModal={openModal} title={t("service.service_corp")} description={t("service.corp_desc")} key={4}/>
                <ProductItem price={"от 60 000₸"} image={"/icon1.png"} id={1} openModal={openModal} title={t("service.service_visit")} description={t("service.visit_desc")} key={1}/>
            </div>
            </div>
        </div>
        </>
    )
}