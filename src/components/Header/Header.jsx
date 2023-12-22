import './header.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';

const Header = () => {
const [category, setCatagary] = useState([])

useEffect(()=>{
axios('https://fakestoreapi.com/products/categories')
.then(({data})=> setCatagary(data));
},[])

    return (
        <header>
        <div className='container header-container'>
            <h1><Link to={'/'}>Shop</Link></h1>
            <nav>
                {
                    category.map(item => {
                        return <Link key={item} to={`/category/${item}`}>{item}</Link>
                    })
                }
                <Link to={'/'}>home</Link>
                <Link to={'/cart'}>cart</Link>
            </nav>
            
        </div>
        </header>
    );
}

export default Header;
