import { React, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import logo from '../../assets/images/ecommlogo.png';
import { NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMenuOutline } from 'react-icons/io5';
import { BsHeart } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import navbar from '../../assets/styles/header/Navbar.module.css';
import {app, mainCategory } from '../../utils/constants/constant-data';
import Searchbar from './Searchbar.js';
import Drawer from '../common/Drawer';
import CartContainer from '../../features/products/presentation/components/cart/CartContainer';
import CartTotal from '../../features/products/presentation/widgets/CartTotal';
import WishlistTotal from '../../features/products/presentation/widgets/WishlistTotal';


export function Nav(props) {
    const [show, setShow] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [cart, setCart] = useState(false);
    const [wishTotal, setWishTotal] = useState(0);

    const activeLink= {
        borderBottom:'3px solid #fff'
      }

    useEffect(()=>{
        function searchbar() {
            if(window.innerWidth>991){
                setShow(false);
            } else if (window.innerWidth<991){
                setShow();
            }
            else {
                setShow(true);
            }
        }
        searchbar();
        window.addEventListener('resize', searchbar);
        return()=> {
            window.removeEventListener("resize", searchbar);
        };
    }, []);

    const searchbar = () => {
        setShow((prev) => prev = !prev);
    }
    const drawerMenu = () => {
        if (window.innerWidth > 991) {
            setDrawer(false);
        }
        setDrawer(!drawer);
    }
    const shopcart = () => {
        setCart(!cart);
    }

    return (
        <>
            {drawer ? <Drawer state={drawerMenu} /> : ''}
            <nav className='navbar navbar-expand-lg position-sticky'>
                <div className={`container-fluid ${navbar.navmenu}`}>
                    <IoMenuOutline className={`navbar-toggler-icon ${navbar.hambg}`} onClick={drawerMenu} />
                    <NavLink className={`navbar-brand ${navbar.brand}`} to='/'>
                        <img src={logo} className={navbar.logo} alt='logo'/>
                        {app.name}
                    </NavLink>
                    <div className={navbar.navtoggle}>
                        <AiOutlineSearch className={navbar.searchic} onClick={searchbar} />
                        <div style={{position:'relative', display:'inline'}}>
                            <CartTotal style={{fontSize:'0.8rem'}}/>
                            <BsCart2 className={navbar.cart} onClick={shopcart} />
                        </div>
                        {props.user==null||undefined ? 
                        <NavLink to='/signin' className={navbar.signin}><FiUser className={navbar.signin} /></NavLink>
                        :
                        <NavLink to='#' className={navbar.userAccItem}>
                            <span className={navbar.userName}>Hi, {props.user.displayName.split(" ")[0]}</span>
                            <div className={navbar.userDropdownMenu}>
                                <p className={navbar.userMyAccountTitle}>My Account</p>
                                <NavLink className={navbar.userDropdownItem} to="#">Your orders</NavLink>
                                <NavLink className={navbar.userDropdownItem} to='#' onClick={props.signOutUser}>Sign out</NavLink>
                            </div>
                        </NavLink>}
                    </div>

                    <div className={`collapse navbar-collapse d-flex justify-content-center ${navbar.navlg}`}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className='nav-item menulist mr-2'>
                                <NavLink className={`${navbar.navlink} ${navbar.products}`} 
                                style={({ isActive }) => isActive ? activeLink : undefined } 
                                exact to='/products' aria-expanded="false">
                                    Products
                                </NavLink>
                                <div className={navbar.prodshutter}>
                                    <ul className={navbar.prodmenu}>
                                        <li>
                                            <NavLink className={navbar.prodmenuitem} to='/foods&beverages'>Foods and Beverages</NavLink>
                                            <ul className={navbar.prodsubmenu}>
                                                {mainCategory.filter((item) => {
                                                    return item.type === 'Foods and Beverages';
                                                }).map((item, index=nanoid()) => {
                                                    return (
                                                        <li className={navbar.prodmenusubitem} id={index}>
                                                            <NavLink to={item.link}>{item.name}</NavLink>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                        <li><NavLink className={navbar.prodmenuitem} to='/fashion'>Fashion</NavLink>
                                            <ul className={navbar.prodsubmenu}>
                                                {mainCategory.filter((item) => {
                                                    return item.type === 'Fashion';
                                                }).map((item, index=nanoid()) => {
                                                    return (
                                                        <li className={navbar.prodmenusubitem} key={index}>
                                                            <NavLink to={item.link}>{item.name}</NavLink>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                        <li><NavLink className={navbar.prodmenuitem} to='/moreproducts'>More...</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <Searchbar />
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li id='wishlistkey101' className="nav-item">
                                <NavLink className={`${navbar.navlink} ${navbar.wishLink}`} to='/wishlist'
                                style={({ isActive }) => isActive ? activeLink : undefined }>
                                    <BsHeart className='wishlist' />
                                    <WishlistTotal />
                                </NavLink>
                            </li>
                            <li id='cartlinkkey103' className="nav-item">
                                <NavLink className={`${navbar.navlink} ${navbar.cartLink}`} to='#' onClick={shopcart} >
                                    Cart <BsCart2 className='cart' />
                                    <CartTotal />
                                </NavLink>
                            </li>
                           {props.user == null||undefined ? 
                            <li id='signinkey102' className={`nav-item ${navbar.signInItem}`}>
                                <NavLink className={`${navbar.navlink} ${navbar.signIn}`} to='/signin'>Sign in</NavLink>
                            </li>
                            :
                            <li id='signinkey102' className={`nav-item ${navbar.userAccItem}`}>
                                <NavLink className={`${navbar.navlink} ${navbar.signinedUserName}`} to='#'>Hi, {props.user.displayName.split(" ")[0]}</NavLink>
                                    <div className={navbar.dropdownMenu}>
                                        <p className={navbar.myAccountTitle}>My Account</p>
                                        <NavLink className={navbar.dropdownItem} to="#">Your orders</NavLink>
                                        <NavLink className={navbar.dropdownItem} to="#" onClick={props.signOutUser}>Sign out</NavLink>
                                    </div>
                            </li>}
                        </ul>
                    </div>
                </div>

                {show ? <Searchbar className={navbar.smallsearchbar} /> : ''}
            </nav>
            {cart ? <CartContainer val={shopcart} user={props.user}/> : ''}
            {/* {cart ? <Cart /> : ''} */}

        </>
    )
}
