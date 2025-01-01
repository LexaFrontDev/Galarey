
export function RoutesHome() {
    return `
        <h1>Главная страница</h1>
        <p>Добро пожаловать!</p>
        <button onclick="navigateTo('/about')">Перейти на страницу "О нас"</button>
    `;
}
