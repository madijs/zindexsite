import Head from "next/dist/next-server/lib/head";
import FeatureItem from "./FeatureItem";
import Slider from "react-slick";
import styles from "../../../assets/features/featuresSlide.module.scss";
import React from 'react'
import {useTranslation} from "react-i18next";

export default function FeatureSlide() {
    const {t} = useTranslation();
    const settings = {
        zIndex:-1,
        infinite: true,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        speed: 500,
        cssEase: "linear",
        initialSlide: 0,
        dots:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(
        <div style={{width:'100%'}}>
            <Head>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
                <Slider {...settings} className={styles.featureSlider}>
                        <FeatureItem
                            image={'/f1.png'}
                            title={t('features.feature-quality')}
                            description={t('features.quality-desc')}
                        />
                        <FeatureItem
                            image={'/f2.png'}
                            title={t('features.feature-speed')}
                            description={t('features.speed-desc')}
                        />
                        <FeatureItem
                            image={'/f3.png'}
                            title={t('features.feature-design')}
                            description={t('features.design-desc')}
                        />
                        <FeatureItem
                            image={'/f4.png'}
                            title={t('features.feature-support')}
                            description={t('features.support-desc')}
                        />
                </Slider>
        </div>
    )
}