import styled from "styled-components";
import { Button } from "../../globalStyles";

export const ProductCategory = styled.h4`
    font-weight: 300;
    text-transform: uppercase;
    width: fit-content;
    margin: 0 !important;
    margin-bottom: 20px !important;
    background: var(--color-light-grey);
    padding: 10px;
    border-radius: 5px;
`;

export const ProductDetailsContainer = styled.div`
    background-color: var(--color-light);
    border-radius: 10px;
`;

export const ProductImageContainer = styled.div`
    padding: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;
export const ProductImage = styled.img`
    width: 75%;
    padding: 50px;
    object-fit: contain;

    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`;

export const ProductInfoContainer = styled.div`
    padding: 30px;
    padding-right: 10px;
    background-color: var(--color-light);


    @media screen and (max-width: 768px) {
        padding: 10px;
    }
`;

export const ProductInfoTitle = styled.h1`
    font-weight: 400;
    letter-spacing: 0.17em;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
`;

export const ProductPrice = styled.h2`
    font-weight: bold;
    margin-bottom: 70px;
`;

export const ProductDescriptionTitle = styled.h4`
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

export const ProductDescription = styled.p`
    font-size: 1em;
    line-height: 2em;
    height: 200px;
`;

export const AddToCartButton = styled(Button)`
    width: 100%;
    letter-spacing: 0.3em;
    text-transform: uppercase;
`;

