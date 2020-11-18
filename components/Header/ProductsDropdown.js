import {useState} from "react"
import {useTranslation} from "react-i18next";
import {useRouter} from "next/router";


export default function ProductsDropdown({products}) {

    const router = useRouter();
    const {t} = useTranslation();
    const [show,setShow] = useState(false);


    let product_elements = products.map((el,index)=>(
        <li onClick={()=>{
                router.push(el.path)
        }} key={index + new Date().toISOString()}>
            <a className="nav-link">
                {t(el.title)}
            </a>
        </li>
    ));

    return(
        <li className="nav-item">
            <a className="nav-link dropdown-btn icon icon-arrow__down"  onClick={()=>setShow(!show)}>
                {t('header.ourProducts')}
            </a>
            <ul className="dropdown-menu nav-dropdown" style={show ? {'display':'block'} :{}}>
                {product_elements}
            </ul>
        </li>
    )
}