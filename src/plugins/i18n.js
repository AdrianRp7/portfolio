import { createI18n } from 'vue-i18n'
import en from '@/languages/en.js';
import es from '@/languages/es.js';

const i18n = createI18n({
    
    legacy: false,
    locale: 'es',
    messages: {
        es: es,
        en: en,
    }
})

export default i18n;