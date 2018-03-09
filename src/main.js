import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import LangEn from './lang/en'
import LangZhCHS from './lang/zhCHS'

Vue.use(VueI18n)
const i18n = new VueI18n({
    //定义默认语言
    locale: 'zhCHS', 
    messages: {
        'en': LangEn,
        'zhCHS': LangZhCHS
    }
})

new Vue({
    el: '#app',
    i18n,
    render: h => h(App)
})
