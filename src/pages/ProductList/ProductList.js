import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../redux/actions/productActions';

import Product from '../Product/Product';

// ------------------------ styled components ------------------------
import { 
    PageTitle,
    Row,
    Column
 } from '../../globalStyles'
 // ------------------------ styled components ------------------------


const ProductList = () => {
    const products = useSelector((state) => state.setProductsReducer.products);
    const displayProducts = products.map((product) => {
        return (
            <Column key={product.id} lg="3" md="6" sm="12">
                <Product {...product} />
            </Column>
        )
    })

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getProducts());
    }, []);

    return (
        <>
        <PageTitle>Our Products</PageTitle>
        {displayProducts.length === 0? <h2>Loading....</h2> :
        (
            <Row>
                {displayProducts}
            </Row>
        )}
        </>
        
    )
}

export default ProductList
