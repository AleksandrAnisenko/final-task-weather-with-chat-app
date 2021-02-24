import {WEATHER_ROUTE, LOGIN_ROUTE} from "./utils/consts";
import Login from "./components/Login";
import Weather from "./components/Weather";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: WEATHER_ROUTE,
        Component: Weather
    }
]
