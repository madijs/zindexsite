import {useEffect} from 'react'
import Head from "next/dist/next-server/lib/head";
import FeatureItem from "./FeatureItem";
import Slider from "react-slick";
import styles from "../../../../assets/mainPage/features/featuresSlide.module.scss";
import {useDispatch, useSelector} from "react-redux"
import {fetchFeature} from "../../../../redux/actions/feature/getFeatures";



export default function FeatureSlide() {
    const dispatch = useDispatch();
    const {features} = useSelector(state => state.feature);
    const {locale} = useSelector(state => state.language)

    useEffect(()=>{
       // async function load() {
            if (features[locale] === undefined) {
                dispatch(fetchFeature(locale))
            }
       // }
        // if(!serverResponse){
        //     load()
        // }
    },[locale])

    const settings = {
        infinite: false,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
        initialSlide: 0,
        dots:true,
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
            {features[locale] !==undefined && (
                <Slider {...settings} className={styles.featureSlider}>
                    {features[locale].map((el,index)=>(
                        <FeatureItem
                            key={index}
                            title={el.title}
                            description={el.description}
                            image={el.image}
                        />
                    ))}
                </Slider>
            )}
        </div>
    )
}