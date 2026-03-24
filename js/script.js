// 移动菜单切换
const mobileMenu = document.getElementById('mobileMenu');
const nav = document.getElementById('nav');

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    nav.classList.toggle('active');
});

// 点击导航链接时关闭移动菜单
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        nav.classList.remove('active');
        
        // 移除所有 active 类
        navLinks.forEach(l => l.classList.remove('active'));
        // 添加 active 类到当前链接
        this.classList.add('active');
    });
});

// 页面滚动时更新导航
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// 表单提交处理
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert('感谢订阅！我们已收到您的邮箱：' + email);
        this.reset();
    });
}

// 平滑滚动优化
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
