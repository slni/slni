// ===== App Data =====
const appsData = [
    {
        id: 'finbot',
        name: 'FinBot',
        nameEn: 'FinBot',
        icon: 'F',
        description: '一款简洁智能的记账应用，帮助你轻松管理个人财务，追踪每一笔开支。',
        descriptionEn: 'A simple and smart expense tracking app to help you manage personal finances easily.',
        tags: ['记账', '财务', '效率工具'],
        tagsEn: ['Finance', 'Productivity', 'Utilities'],
        page: 'apps/finbot.html',
        color: '#4f46e5'
    }
];

// ===== i18n Data =====
const i18nData = {
    zh: {
        'nav.home': '首页',
        'nav.apps': '应用',
        'nav.about': '关于',
        'hero.title': '用心打造好用的应用',
        'hero.subtitle': '简洁、高效、美观',
        'apps.title': '我的应用',
        'footer.copyright': '© 2026 SLNI. All rights reserved.',
        'app.viewDetails': '查看详情',
        'app.download': '立即下载',
        'app.screenshots': '应用截图',
        'app.features': '功能特点',
        'app.back': '返回首页'
    },
    en: {
        'nav.home': 'Home',
        'nav.apps': 'Apps',
        'nav.about': 'About',
        'hero.title': 'Building Apps with Care',
        'hero.subtitle': 'Simple, Efficient, Beautiful',
        'apps.title': 'My Apps',
        'footer.copyright': '© 2026 SLNI. All rights reserved.',
        'app.viewDetails': 'View Details',
        'app.download': 'Download',
        'app.screenshots': 'Screenshots',
        'app.features': 'Features',
        'app.back': 'Back to Home'
    }
};

// ===== Current Language =====
let currentLang = 'zh';
