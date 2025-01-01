class RoutesBuilder {
    constructor() {
        this.modules = require.context('../pages', false, /\.js$/);
    }

    collectRoutes() {
        const routes = {};

        this.modules.keys().forEach((filePath) => {
            const module = this.modules(filePath); 

            for (const exportName in module) {
                if (exportName.startsWith('Routes')) { 
                    const routeName = exportName.replace('Routes', '').toLowerCase(); 
                    const routePath =  `/${routeName}`; 
                    routes[routePath] = module[exportName]; 
                }
            }
        });

        return routes;
    }
}

export const routesBuilder = new RoutesBuilder();