import Link from "next/link";
import {useState} from "react"
import NavItems from "./NavItems";
import {useTranslation} from "react-i18next";
import i18n from "i18next";



export default function Header({language,changeLang,openModal,modalIsOpen}) {
    const {t} = useTranslation();
    const [show, setShow] = useState(false);

    const changeLink = (path) => {
        let copyState = [...links];
        for (let i=0;i<copyState.length;i++){
            if(copyState[i].path === path){
                copyState[i].active = true;
            }else{
                copyState[i].active = false
            }
        }
    };

    const languageChanged = (language, e) => {
        e.preventDefault();
        changeLang(language);
        i18n.changeLanguage(language);
    };

    return (
        <header style={modalIsOpen ? {zIndex:'-1'}:{}} className={'header'}>
            <div className={'container'}>
                <Link href={'/'}>
                    <div className={'logo'}>Z-Index</div>
                </Link>
                <ul style={show ? {display: 'block'} : {}} className={'nav desktopNav'}>
                    <NavItems changeLink={changeLink}/>
                </ul>
                <div className="header-right_section">
                    <div style={{cursor:"pointer"}} onClick={()=>openModal("Проект")} className="order_project">
                        {t("header.orderProject")}
                    </div>
                    <a href="#" className="dropdown-lang-btn dropdown-lang">
                        <img src={`/lang_${language}.png`} alt=""/>
                        <span style={{color:"#4656F1"}}>{language}</span>
                        <ul style={show ? {display: 'block'} : {}} className="dropdown-lang-menu">
                            <li onClick={(e) => languageChanged('ru', e)}><span className="dropdown-item">
                                <img src="/lang_ru.png" alt=""/>RU</span></li>
                            <li onClick={(e) => languageChanged('kz', e)}><span className="dropdown-item">
                                <img src="/lang_kz.png" alt=""/>KZ</span></li>
                        </ul>
                    </a>
                </div>
             </div>
        </header>
    )
}