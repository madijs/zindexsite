import {useState} from "react"
import {useTranslation} from "react-i18next";
import {useRouter} from "next/router";


export default function ProductsDropdown({products}) {

    const {t} = useTranslation();
    const [show,setShow] = useState(false);


    return(
        <li className="nav-item">
            <a className="nav-link dropdown-btn icon icon-arrow__down"  onClick={()=>setShow(!show)}>
                {t('header.mainPage')}
            </a>
        </li>
    )
}