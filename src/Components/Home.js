import React from 'react';
import {Link} from 'react-router-dom';

const HomeComponents = ()=>{
    const PrductData = [
        {id:1, name:'Product', cat:'laptop'},
        {id:3, name:'Product-3', cat:'mobile'},
        {id:5, name:'Product-5', cat:'homeApplic'},
        {id:7, name:'Product-7', cat:'pc'},
    ]
    return (
        <>
            Hello i m Home Page Components 

            <ul>
                {
                    PrductData.map((item)=>{
                        return (
                            <li key={item.id}>
                                <Link to={`/product/${item.id}/${item.cat}`}>
       
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default HomeComponents;
