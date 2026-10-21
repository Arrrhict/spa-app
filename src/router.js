// Простой SPA-роутер на History API
const routes = {
    '/spa-app/public/':          renderHome,
    '/spa-app/public/about':     renderAbout,
    '/spa-app/public/contact':   renderContact,
};

function renderHome() {
    return `
        <section>
            <h2>Главная</h2>
            <p>Добро пожаловать в учебное SPA-приложение.</p>
            <p>Этот проект демонстрирует клиентский роутинг без перезагрузки страницы.</p>
        </section>
    `;
}

function renderAbout() {
    return `
        <section>
            <h2>О проекте</h2>
            <p>Вариант 4 — загрузка SPA-приложения в GitHub.</p>
            <p>Стек: HTML, CSS, JavaScript, Apache (XAMPP), mod_rewrite.</p>
        </section>
    `;
}

function renderContact() {
    return `
        <section>
            <h2>Контакты</h2>
            <p>Студент: ____________________</p>
            <p>Группа: ____________________</p>
            <p>Email: student@example.com</p>
        </section>
    `;
}

function navigate(path) {
    history.pushState({}, '', path);
    render(path);
}

function render(path) {
    const app = document.getElementById('app');
    const view = routes[path] || (() => '<section><h2>404</h2><p>Страница не найдена</p></section>');
    app.innerHTML = view();
}

// Перехват кликов по ссылкам с data-link
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (!link) return;
    e.preventDefault();
    navigate(link.getAttribute('href'));
});

// Кнопки "назад/вперёд" в браузере
window.addEventListener('popstate', () => {
    render(location.pathname);
});