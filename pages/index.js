import styles from '../styles/Home.module.css';
import Main from "../components/main";
import Features from "../components/whywe/Features";
import React, {useState,useRef} from 'react'
import Services from "../components/Services";
import Modal from "react-modal";
import Header from "../components/Header/Header";
import InputMask from 'react-input-mask';
import validateEmail from "../tools/validateEmail";
import axios from 'axios';
import swal from 'sweetalert';
import {useTranslation} from "react-i18next";
import Footer from "../components/Footer/Footer";
import Head from "next/head";


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        zIndex                : '1000',
        transform             : 'translate(-50%, -50%)'
    }
};

export default function Home() {
    const {t} = useTranslation();
    const myRef = useRef(null);

    const myRef2 = useRef(null);

    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'});

    const executeScroll2 = () => myRef2.current.scrollIntoView({behavior: 'smooth'});

    const [language,setLanguage] = useState('ru');
    const [fullName,setFullName] = useState('');

    const [fullNameError,setFullNameError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [phoneNumberError,setPhoneNumberError] = useState(false);

    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');

    const changeLang = (lang) => {
        setLanguage(lang);
    };
    const [modalIsOpen,setIsOpen] = useState(false);
    const [title,setTitle] = useState('');

    function openModal(title="") {
        setIsOpen(true);
        setTitle(title)
    }
    function closeModal(){
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setEmailError(false);
        setPhoneNumberError(false);
        setFullNameError(false);
        setIsOpen(false);
    }

    function changeName(name) {
        if(name.replace(/\s/g, '').length>0){
            setFullNameError(false)
        }else{
            setFullNameError(true)
        }
        setFullName(name)
    }

    function changeEmail(email) {
        if (validateEmail(email)){
            setEmailError(false)
        }else{
            setEmailError(true)
        }
        setEmail(email)
    }
    function changePhone(phone) {
        if(phone.length!==17){
            setPhoneNumberError(true)
        }else{
            setPhoneNumberError(false)
        }
        setPhoneNumber(phone)
    }
    function submitForm() {
        if (!phoneNumberError && !emailError && !fullNameError){
            const payload = {
                type: title,
                phone: phoneNumber,
                email: email,
                name: fullName
            };
            const promise = new Promise(function (resolve,reject) {
                axios.post('https://z-index-factory.herokuapp.com/api',payload).then(res=>{
                    resolve(true)
                }).catch(()=>{
                    reject(false)
                })
            });
            promise.then(()=>{
                swal({
                    title: "Успешно!",
                    text: "Ваша заявка успешно отправлено.",
                    icon: "success",
                    button: "OK",
                }).then(()=>{
                    closeModal()
                });
            }).catch(()=>{
                swal({
                    title: "Ошибка!",
                    text: "Отправьте заявку еще раз.",
                    icon: "error",
                    button: "OK"
                })
            })

        }
    }

  return (
      <>
          <Head>
              <title>{t("title")}</title>
              <link rel="shortcut icon" href="/logo.jpeg" />
          </Head>
          <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
          >
             <div className={styles.modal}>
                 <div onClick={closeModal} className={styles.close}></div>
                 <div className={styles.modal_container}>
                     <div className={styles.modal_img}>
                         <img src="/modal.png" alt=""/>
                     </div>
                     <div className={styles.modal_form}>
                         <div className={styles.main_forms}>
                             <div className={styles.form_header}>
                                <span>{t('service.post')}</span>
                                 <p>#{title}</p>
                             </div>
                             <div className={styles.forms_row}>
                                 <div>
                                     <img src="/person.png" alt=""/>
                                 </div>
                                 <div className={styles.input_div}>
                                     <input onChange={(e)=>changeName(e.target.value)} placeholder="ВАШЕ ИМЯ" className={styles.input}/>
                                 </div>
                             </div>
                             {fullNameError && (
                                 <div className={styles.invalid_field}>Введите имя</div>
                             )}
                             <div className={styles.forms_row}>
                                 <div>
                                     <img src="/msg.png" alt=""/>
                                 </div>
                                 <div className={styles.input_div}>
                                     <input onChange={(e)=> changeEmail(e.target.value)} placeholder="EMAIL" className={styles.input}/>
                                 </div>
                             </div>
                             {emailError && (
                                 <div className={styles.invalid_field}>Неккоректный формат почты</div>
                             )}
                             <div className={styles.forms_row}>
                                 <div>
                                     <img src="/ph.png" alt=""/>
                                 </div>
                                 <div className={styles.input_div}>
                                     <InputMask
                                         onChange={(e)=>changePhone((e.target.value))}
                                         className={styles.input}
                                         placeholder="ВАШ НОМЕР ТЕЛЕФОНА"
                                         type="text"
                                         mask="+7(799) 999-99-99"
                                         maskChar={null}
                                     >
                                     </InputMask>
                                 </div>
                             </div>
                             {phoneNumberError && (
                                 <div className={styles.invalid_field}>Номер телефона должен состоять из 11 цифр</div>
                             )}
                             <div onClick={submitForm} className={styles.submit}>
                                 Отправить
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
          </Modal>
        <div style={modalIsOpen===true ? {overflow:"hidden"} : {}} className={styles.container}>
            <Header modalIsOpen={modalIsOpen} openModal={openModal} changeLang={changeLang} language={language}/>
            <Main modalIsOpen={modalIsOpen} executeScroll={executeScroll}/>
            <span ref={myRef2}>
                <Features/>
            </span>
          <span ref={myRef}>
            <Services t={t} language={language} openModal={openModal}/>
          </span>
            <Footer executeScroll={executeScroll} executeScroll2={executeScroll2}/>
        </div>
      </>
  )
}
