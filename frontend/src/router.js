export class Router{
    constructor(){
        this.initEvents()
        this.routes = [
            {
                route: '/',

            },
            {
                route: '/404',

            },
            {
                route: '/login',

            },
            {
                route: '/signup',

            },

        ]
    }

    initEvents(){
        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this));
        window.addEventListener('popstate', this.activateRoute.bind(this));
    }

    activateRoute(){

    }
}