import { useLocation } from "react-router-dom"

export default (type) => {
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    return query.get(type);
}