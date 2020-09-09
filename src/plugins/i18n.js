import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Welcome to Your Vue.js App'
    }, 'ar': {
        welcomeMsg: 'مرحبًا بك في تطبيق Vue.js الخاص بك'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'ar', // set fallback locale
    messages, // set locale messages
});

export default i18n;
