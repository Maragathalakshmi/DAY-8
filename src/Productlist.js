import React from 'react'
function Productlist(props) {
    const { products } = props;
    return (
        <div><br /><br /><br />
            {products.map((product) => (
                <div>
                    {product.no}.
                        Name : {product.name}&nbsp;&nbsp;
                    Price : {product.price}&nbsp;&nbsp;
                    ImageURL : {product.img}&nbsp;&nbsp;
                    
                </div>
            ))}
        </div>
    )
}

export default Productlist