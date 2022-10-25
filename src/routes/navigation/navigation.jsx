import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user-selector';
import { selectCartOpen } from "../../store/cart/cart-selector";
import { setCurrentUser } from "../../store/user/user-actions";
import { signOutUser } from "../../untilities/firebase/firebase";
import Logo from "../../components/Logo/logo";
import './navigation.scss';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectCartOpen);
    const dispatch = useDispatch();

    const signOutHandler = async () => {
        await signOutUser();
        dispatch(setCurrentUser(null))
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Logo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}>
                            Sign Out
                        </span>) : (
                        <Link className="nav-link" to="/signin">
                            SignIn
                        </Link>)}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;