import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cleanUpProductDetails, getProductDetails, setProductDetails } from '../../redux/actions/productActions';

// ------------------------ styled components ------------------------
import {
    Column,
    Row
} from "../../globalStyles";
import { 
    AddToCartButton,
    ProductCategory,
    ProductDescription,
    ProductDescriptionTitle,
    ProductDetailsContainer,
    ProductImage, 
    ProductImageContainer, 
    ProductInfoContainer, 
    ProductInfoTitle, 
    ProductPrice
} from './ProductDetails.element';

// ------------------------ styled components ------------------------


const ProductDetails = () => {
    const { productId } = useParams();
    const product = useSelector((state)=> state.setProductDetailsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if(productId && productId !== "") dispatch(getProductDetails(productId));
        return () => {
            dispatch(cleanUpProductDetails());
        }
    }, []);
    return (
        <>
            {Object.keys(product).length === 0? 
                <h3>Loading .....</h3> : 
                (<ProductDetailsContainer>
                    <Row>
                        <Column lg="6" md="6" sm="12">
                            <ProductImageContainer>
                                <ProductImage src={product.image} alt={product.title}/>
                            </ProductImageContainer>
                        </Column>
                        <Column lg="6" md="6" sm="12">
                            <ProductInfoContainer>
                                <ProductCategory>{product.category}</ProductCategory>
                                <ProductInfoTitle>{product.title}</ProductInfoTitle>
                                <ProductPrice>$ {product.price}</ProductPrice>
                                <ProductDescriptionTitle>Description: </ProductDescriptionTitle>
                                <ProductDescription>{product.description}</ProductDescription>
                                <AddToCartButton>Add To Cart</AddToCartButton>
                            </ProductInfoContainer>
                        </Column>
                    </Row> 
                </ProductDetailsContainer>)}
        </>
    )
}

export default ProductDetails
