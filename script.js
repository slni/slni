// 更新年份
document.getElementById('year').textContent = new Date().getFullYear();

// 添加平滑滚动效果（如果将来添加更多内容）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
