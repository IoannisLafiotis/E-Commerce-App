import React from 'react';
// import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden} from '../../redux/cart/cart.selectors';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv,OptionLink  } from './header.styles'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='./'>  
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
        <OptionLink to='/shop'>
            SHOP
        </OptionLink>
            <OptionLink to='/shop'>
            CONTACT
        </OptionLink>
            {
                currentUser ?(
                <OptionDiv onClick={() => auth.signOut()}> SIGN OUT 
                </OptionDiv>)
                :(
                <OptionDiv to='/signin'> SIGN IN </OptionDiv>)
            }
            
            <CartIcon/>

        </OptionsContainer>
        {
            hidden ? null : <CartDropdown/>
    }
    </HeaderContainer>
); 

const mapStateToProps = createStructuredSelector({
currentUser: selectCurrentUser ,
hidden: selectCartHidden
}) 


export default connect(mapStateToProps)(Header);