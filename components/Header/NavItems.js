import Link from "next/link";
import {useTranslation} from "react-i18next";

export default function  NavItems({links=[],setShow,isMobile}) {
    const {t} = useTranslation()
    const link_elements = links.map((el,index) => (
        <Link key={index} href={el.path}>
            <li onClick={()=>{
                if(isMobile){
                    setShow(false)
                }
            }} className={'nav-item nav-link'}>
                {t(el.title)}
            </li>
        </Link>
    ));
    return<>
        {link_elements}
    </>
}