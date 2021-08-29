import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardSubtitle } from "../../globalStyles";

export const CategoryText = styled(CardSubtitle)`
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 0.8em;
    letter-spacing: 0.35em;
`;

export const LinkToProductDetails = styled(Link)`
    text-decoration: none !important;
    color: inherit;
`;