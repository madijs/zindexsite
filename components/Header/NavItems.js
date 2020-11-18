import Link from "next/link";
import {useTranslation} from "react-i18next";

export default function  NavItems({links=[],setShow,isMobile,changeLink}) {

    const {t} = useTranslation();
    const link_elements = links.map((el,index) => (
        <Link key={index} href={el.path}>
            <li style={el.active===true ? {borderBottom:"1px solid #a92915"} : {}} onClick={()=>{
                if(isMobile){
                    setShow(false)
                }
                changeLink(el.path)
            }} className={'nav-item nav-link'}>
                {t(el.title)}
            </li>
        </Link>
    ));
    return<>
        {link_elements}
    </>
}