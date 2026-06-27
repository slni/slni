// ===== App Data =====
const appsData = [
    {
        id: 'finbot',
        name: 'FinBot',
        nameEn: 'FinBot',
        icon: '<img src="apps/images/finbot-icon.png" alt="FinBot" style="width:100%;height:100%;object-fit:contain;border-radius:8px;">',
        description: '一款简洁智能的记账应用，帮助你轻松管理个人财务，追踪每一笔开支。',
        descriptionEn: 'A simple and smart expense tracking app to help you manage personal finances easily.',
        tags: ['记账', '财务', '效率工具'],
        tagsEn: ['Finance', 'Productivity', 'Utilities'],
        page: 'apps/finbot.html',
        color: '#4f46e5'
    },
    {
        id: 'petmatchparty',
        name: 'Pet Match Party',
        nameEn: 'Pet Match Party',
        icon: '<img src="apps/images/petmatchparty-icon.png" alt="Pet Match Party" style="width:100%;height:100%;object-fit:contain;border-radius:8px;">',
        description: '一款有趣的消消乐游戏，简单易上手，挑战你的反应速度和策略思维。',
        descriptionEn: 'A fun match-3 puzzle game that is easy to learn and challenges your reflexes and strategy.',
        tags: ['游戏', '休闲', '益智'],
        tagsEn: ['Game', 'Casual', 'Puzzle'],
        page: 'apps/petmatchparty.html',
        color: '#f59e0b'
    },
    {
        id: 'beautywallpapers',
        name: '美女壁纸',
        nameEn: 'Beauty Wallpapers',
        icon: '<img src="apps/images/beautywallpapers-icon.png" alt="Beauty Wallpapers" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">',
        description: '一款精致的壁纸应用，浏览、收藏并保存高质量美女壁纸和 Live Photos。',
        descriptionEn: 'A refined wallpaper app for browsing, collecting, and saving beautiful high-quality wallpapers and Live Photos.',
        tags: ['壁纸', '图片', '生活方式'],
        tagsEn: ['Wallpaper', 'Photos', 'Lifestyle'],
        page: 'apps/beautywallpapers.html',
        color: '#db7093'
    },
    {
        id: 'shotcraftstudio',
        name: 'App截图工坊',
        nameEn: 'ShotCraft Studio',
        icon: '<img src="apps/images/shotcraftstudio-icon.png" alt="ShotCraft Studio" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">',
        description: '为开发者和独立创作者打造的 App Store 截图制作工具，快速生成适配 iPhone 和 iPad 的上架素材。',
        descriptionEn: 'An App Store screenshot creation tool for developers and indie creators to generate polished iPhone and iPad listing visuals.',
        tags: ['截图', 'App Store', '开发工具'],
        tagsEn: ['Screenshots', 'App Store', 'Developer Tool'],
        page: 'apps/shotcraftstudio.html',
        color: '#5b5ce2'
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
