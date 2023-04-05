import React from 'react'
function Productlist(props) {
    const { products } = props;
    return (
        <div><br /><br /><br />
            {products.map((product) => (
                <div>
                    {product.no}.
                    
                        Name : {product.name}
                        Price : {product.price}
                       ImageURL : {product.img}
                    
                </div>
            ))}
        </div>
    )
}

export default Productlist