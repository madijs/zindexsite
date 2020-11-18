import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import ru from '../lang/ru.json'
import kz from '../lang/kz.json'
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const resources = {
    ru: { translation: ru  },
    kz: { translation: kz  },
};

i18n
    .use(initReactI18next)
    .init({
        resources: resources,
        lng: 'ru',
        fallbackLng:'ru',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;