import { routesBuilder } from './Routes/RoutesBuilder.js';
import HomePage from './pages/HomePage.js';
import NotFoundPage from './pages/NotFoundPage.js';


export class Routes{
    routes;
    constructor(routes){
        this.routes = routes;
        window.addEventListener('popstate', () => this.handleRouting());
    }

    handleRouting(){
        const path = window.location.pathname;
        const Page = this.routes[path] || NotFoundPage;
        document.getElementById('app').innerHTML = Page();
    }

    navigateTo(path) {
        window.history.pushState({}, path, window.location.origin + path);
        this.handleRouting();
    }
}
