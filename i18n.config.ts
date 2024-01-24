import * as home from './lang/home.page'

export default defineI18nConfig(() => ({
    locale: 'ru',
    legacy: false,
    globalInjection: true,
    messages: {
        uz: {
            title: 'Yozuv',
            home: home.uz,
        },
        ru: {
            title: 'Текст',
            home: home.ru,
        }
    },
}))