import { useLocation } from "react-router-dom"

export default (query) => {
    const location =  useLocation();
    const newQuery = new URLSearchParams();

    Object.entries(query).forEach(([key, value]) => {
        newQuery.set(key, value);
    });

    return {
        pathname: location.pathname,
        search: newQuery.toString()? `?${newQuery.toString()}` : ""
    }
}