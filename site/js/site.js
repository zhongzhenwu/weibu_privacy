(() => {
    document.documentElement.classList.add('js-enabled');

    const initFade = () => {
        document.querySelectorAll('section').forEach(section => section.classList.add('fade-section'));
        const items = document.querySelectorAll('.fade-section');
        if (!('IntersectionObserver' in window)) {
            items.forEach(item => item.classList.add('show'));
            return;
        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        items.forEach(item => observer.observe(item));
    };

    document.addEventListener('DOMContentLoaded', initFade);

    document.addEventListener('click', event => {
        const target = event.target.closest('.email-copy');
        if (!target) return;
        event.preventDefault();
        const email = target.dataset.email || target.textContent.trim();
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => toast('邮箱已复制')).catch(() => fallbackCopy(email));
        } else {
            fallbackCopy(email);
        }
    });

    function fallbackCopy(text) {
        const area = document.createElement('textarea');
        area.value = text;
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        const ok = document.execCommand('copy');
        area.remove();
        toast(ok ? '邮箱已复制' : '复制失败，请手动复制');
    }

    function toast(text) {
        const el = document.createElement('div');
        el.textContent = text;
        el.style.cssText = 'position:fixed;left:50%;bottom:44px;transform:translateX(-50%);z-index:9999;padding:9px 18px;border-radius:18px;background:#16a34a;color:#fff;font-size:14px;box-shadow:0 12px 30px rgba(0,0,0,.22);transition:opacity .25s';
        document.body.appendChild(el);
        setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 260); }, 1300);
    }
})();
