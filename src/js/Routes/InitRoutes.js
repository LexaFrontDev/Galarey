import { routesBuilder } from './RoutesBuilder.js';
import { Routes } from '../Routes.js';


export async function initRouter() {
    const routes = await routesBuilder.collectRoutes();
    const router = new Routes(routes);
    console.log(routes);

    document.addEventListener('DOMContentLoaded', () => {
        router.handleRouting();
    });

    window.navigateTo = (path) => router.navigateTo(path);

    document.body.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && event.target.hasAttribute('data-link')) {
            event.preventDefault();
            const href = event.target.getAttribute('href');
            router.navigateTo(href);
        }
    });

}