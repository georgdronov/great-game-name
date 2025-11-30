import type { Route } from "../types/route";

type Routehandler =()=> void

class Router {
    private currentRoute: Route = 'start'
    private routes: Map<Route, Routehandler> = new Map()

    register(route: Route, handler: Routehandler): void {
        this.routes.set(route, handler)
    }

    nabigate(route: Route): void {
        if(this.routes.has(route)){
            this.currentRoute = route
            this.routes.get(route)?.()
        }
    }

    getCurrentRoute(): Route {
        return this.currentRoute
    }
}

export const router = new Router();