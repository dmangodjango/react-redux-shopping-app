import React from 'react';
import { Link } from 'react-router-dom';

// ------------------------ styled components ------------------------
import { 
    Card, 
    CardTitle,
    CardImage,
    CardSubtitle,
    CardInfoWrapper
 } from '../../globalStyles'
 import { CategoryText, LinkToProductDetails } from './Product.element';
 // ------------------------ styled components ------------------------



const Product = ({id, category, title, image, price}) => {
    return (
        <>
        <LinkToProductDetails to={`product/${id}`}>
            <Card>
                <CardImage src={image} alt="title"/>
                    <CardInfoWrapper>
                        <CategoryText>{category}</CategoryText>
                        <CardTitle>
                            {title}
                        </CardTitle>
                    <CardSubtitle>$ {price}</CardSubtitle>
                </CardInfoWrapper>
            </Card>
        </LinkToProductDetails>
        </>
    )
}

export default Product
