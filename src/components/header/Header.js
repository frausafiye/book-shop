import React, {useState} from 'react'
import Logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link,useHistory} from "react-router-dom"
import {useSelector} from 'react-redux'
import './header.css'

const Header = (props) => {
    const history=useHistory()
    const [inputField,setInputField]=useState("")
    const categories=["Romance","Adventure","Horror","Fantasy","Mystery","Science-Fiction","History","Travel","Children's"]
    
    let favoriteItems=useSelector(state=>state.favorites);
    let cartItems=useSelector(state=>state.cart);

    const AddToAppState=(e)=>{
        e.preventDefault();
        history.push("/")
        props.addInputToState({arg:inputField,type:"userInput"})
    }
    return (
            <div>
                <nav className="nav">
                    <div className="nav-first-line">
                        <img className="logo"src={Logo} alt="logo"/>
                        <form onSubmit={AddToAppState}>
                            <label >
                                <input type="text" name="searchbox" placeholder="search for a book" onChange={(e)=>setInputField(e.target.value)}/> 
                                <button type="submit" className="btn">
                                <FontAwesomeIcon icon={["fas", "search"]} />
                                </button>
                            </label>
                        </form>
                        <div className="horizontal-nav">
                            <div className="horizontal-nav-bars">
                                <FontAwesomeIcon icon={["fas", "bars"]}/>
                            </div>
                            <div className='icons'>
                                <Link to="/cart">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={["fas", "cart-plus"]}/>
                                        <div className="counterbox">{cartItems.length}</div>
                                    </div>
                                </Link>
                                <Link to="/watch">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={["fas", "heart"]}/>
                                        <div className="counterbox">{favoriteItems.length}</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ul className="nav-links">
                        {categories.map(genre=>
                        <li className='nav-link' key={genre} onClick={(e)=>{
                            props.addInputToState({arg:e.target.innerHTML,type:"category"});
                            history.push("/")
                            }}>{genre}
                        </li>)}
                    </ul>
                </nav>
            </div>
        )
}
export default Header