import Link from "next/link";
import ProductsDropdown from "./ProductsDropdown";
import {useEffect, useLayoutEffect, useState} from "react"
import MobileDropdown from "./MobileDropdown/MobileDropdown";
import NavItems from "./NavItems";
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage} from "../../../redux/actions/language/changeLanguage";
import {useTranslation} from "react-i18next";

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default function Header() {
    const {t} = useTranslation()

    const [width] = useWindowSize();
    const [products] = useState([
        {
            path: '/ogpo-vts/',
            title: 'header.insurance',
        }, {
            path: '/road-assistance/',
            title: 'header.helpOnTheRoad',
        },
        // {
        //     path: '/#',
        //     title: 'header.quickPay'
        // }
    ]);

    const [show, setShow] = useState(false);
    const [links] = useState([
        {
            title: 'header.aboutCompany',
            path: '/about',
        },
        {
            title: 'header.aboutPartners',
            path: '/reviews'
        },
        {
            title: 'header.hiw',
            path: '/how-it-works/'
        }
    ]);

    const dispatch = useDispatch();
    const {locale} = useSelector(state => state.language)

    const languageChanged = (language, e) => {
        e.preventDefault()
        dispatch(changeLanguage(language))

    };

    useEffect(() => {
        if (width > 1039) {
            setShow(false)
        }
    }, [width, locale]);

    return (
        <header className={'header'}>
            <div className={'container'}>
                <Link href={'/'}>
                    <div className={'logo'}/>
                </Link>
                <ul style={show ? {display: 'block'} : {}} className={'nav desktopNav'}>
                    <ProductsDropdown products={products}/>
                    <NavItems links={links}/>
                </ul>

                {show && (
                    <ul className={'nav mobileNav'}>
                        <MobileDropdown setShow={setShow} languageChanged={languageChanged} links={links} products={products}/>
                    </ul>
                )}


                <div className="header-right_section">
                    <a className="btn btn_call" href="tel:+77470944845">
                        <svg fill="none" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M11.8547 9.29225C11.5476 8.9725 11.1772 8.80154 10.7846 8.80154C10.3952 8.80154 10.0217 8.96933 9.7019 9.28908L8.70149 10.2863C8.61918 10.242 8.53687 10.2008 8.45772 10.1597C8.34375 10.1027 8.23611 10.0489 8.1443 9.9919C7.20721 9.39672 6.3556 8.62109 5.53881 7.61751C5.14308 7.11731 4.87714 6.69625 4.68403 6.26886C4.94363 6.03142 5.18423 5.78448 5.41851 5.54705C5.50715 5.4584 5.59579 5.36659 5.68444 5.27795C6.34927 4.61312 6.34927 3.75201 5.68444 3.08718L4.82016 2.2229C4.72202 2.12476 4.62071 2.02345 4.52573 1.92215C4.33578 1.72586 4.13633 1.52325 3.93055 1.3333C3.62347 1.02937 3.25623 0.867916 2.86999 0.867916C2.48376 0.867916 2.11019 1.02937 1.7936 1.3333C1.79044 1.33646 1.79044 1.33646 1.78727 1.33963L0.710881 2.42552C0.305652 2.83074 0.0745449 3.32462 0.0238913 3.89764C-0.0520892 4.82207 0.220174 5.68318 0.42912 6.2467C0.941989 7.63018 1.70813 8.91235 2.851 10.2863C4.23764 11.9421 5.90605 13.2496 7.81189 14.1708C8.54004 14.5159 9.51195 14.9243 10.5978 14.9939C10.6643 14.9971 10.734 15.0003 10.7973 15.0003C11.5286 15.0003 12.1428 14.7375 12.624 14.2152C12.6272 14.2088 12.6335 14.2057 12.6367 14.1993C12.8013 13.9999 12.9912 13.8194 13.1907 13.6263C13.3268 13.4965 13.4661 13.3604 13.6022 13.2179C13.9157 12.8918 14.0803 12.5119 14.0803 12.1225C14.0803 11.73 13.9125 11.3532 13.5927 11.0366L11.8547 9.29225ZM12.9881 12.6259C12.9849 12.6259 12.9849 12.6291 12.9881 12.6259C12.8646 12.7589 12.738 12.8792 12.6018 13.0121C12.396 13.2084 12.1871 13.4142 11.9908 13.6453C11.6711 13.9872 11.2943 14.1487 10.8005 14.1487C10.753 14.1487 10.7023 14.1487 10.6548 14.1455C9.71457 14.0854 8.84079 13.7181 8.18546 13.4047C6.39359 12.5372 4.82016 11.3057 3.51266 9.74497C2.43311 8.4438 1.71129 7.24078 1.23325 5.94911C0.938823 5.16081 0.831184 4.54664 0.878672 3.96729C0.91033 3.59688 1.05279 3.28979 1.31556 3.02703L2.39512 1.94747C2.55024 1.80184 2.71487 1.7227 2.87632 1.7227C3.07577 1.7227 3.23723 1.843 3.33854 1.94431C3.34171 1.94747 3.34487 1.95064 3.34804 1.9538C3.54115 2.13426 3.72477 2.32104 3.91789 2.52049C4.01603 2.6218 4.11734 2.72311 4.21865 2.82758L5.08292 3.69186C5.4185 4.02744 5.4185 4.33769 5.08292 4.67327C4.99111 4.76508 4.90247 4.85689 4.81066 4.94553C4.54473 5.2178 4.29146 5.47107 4.01603 5.718C4.0097 5.72433 4.00337 5.7275 4.0002 5.73383C3.72794 6.00609 3.77859 6.27203 3.83558 6.45248C3.83874 6.46198 3.84191 6.47148 3.84508 6.48097C4.06985 7.0255 4.38644 7.53837 4.86765 8.14938L4.87081 8.15254C5.74459 9.22893 6.66585 10.0679 7.68209 10.7106C7.81189 10.7929 7.94486 10.8593 8.07149 10.9227C8.18546 10.9796 8.2931 11.0335 8.38491 11.0905C8.39757 11.0968 8.41024 11.1063 8.4229 11.1126C8.53054 11.1664 8.63185 11.1918 8.73632 11.1918C8.99908 11.1918 9.16371 11.0271 9.21753 10.9733L10.3003 9.8906C10.4079 9.78296 10.5788 9.65316 10.7783 9.65316C10.9746 9.65316 11.136 9.77662 11.2342 9.88426C11.2373 9.88743 11.2373 9.88743 11.2405 9.8906L12.9849 11.635C13.311 11.9579 13.311 12.2903 12.9881 12.6259Z"
                                    fill="#609AF6"/>
                                <path
                                    d="M8.10631 3.56789C8.93577 3.70718 9.68925 4.09975 10.2908 4.70126C10.8923 5.30277 11.2817 6.05625 11.4241 6.8857C11.459 7.09465 11.6394 7.24027 11.8452 7.24027C11.8705 7.24027 11.8927 7.23711 11.918 7.23394C12.1523 7.19595 12.3074 6.97434 12.2694 6.74007C12.0985 5.7365 11.6236 4.82156 10.8986 4.09658C10.1736 3.3716 9.25869 2.89672 8.25511 2.72577C8.02084 2.68778 7.80239 2.84291 7.76124 3.07401C7.72008 3.30512 7.87204 3.5299 8.10631 3.56789Z"
                                    fill="#609AF6"/>
                                <path
                                    d="M14.9826 6.61682C14.7008 4.96425 13.922 3.46047 12.7253 2.26378C11.5286 1.06708 10.0249 0.288284 8.37228 0.00652342C8.14117 -0.0346327 7.92273 0.12366 7.88157 0.354767C7.84358 0.58904 7.99871 0.807484 8.23298 0.84864C9.70827 1.09874 11.0538 1.7984 12.1238 2.86529C13.1939 3.93535 13.8904 5.28083 14.1405 6.75612C14.1753 6.96507 14.3557 7.1107 14.5615 7.1107C14.5868 7.1107 14.609 7.10753 14.6343 7.10437C14.8654 7.06954 15.0237 6.84793 14.9826 6.61682Z"
                                    fill="#609AF6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect fill="white" height="15" width="15"/>
                                </clipPath>
                            </defs>
                        </svg>
                        {t("header.callback")}
                    </a>
                    <a href="#" className="dropdown-lang-btn dropdown-lang">
                        <img src={`/icons/lang_${locale}.png`} alt=""/>
                        {locale.toUpperCase()}
                        <ul style={show ? {display: 'block'} : {}} className="dropdown-lang-menu">
                            <li onClick={(e) => languageChanged('ru', e)}><span className="dropdown-item">
                                <img src="/icons/lang_ru.png" alt=""/>RU</span></li>
                            <li onClick={(e) => languageChanged('kz', e)}><span className="dropdown-item">
                                <img src="/icons/lang_kz.png" alt=""/>KZ</span></li>
                        </ul>
                    </a>
                </div>
                <button onClick={() => setShow(!show)} className={`menuBtn ${show && 'is-show'}`}><span/></button>
            </div>
        </header>
    )
}