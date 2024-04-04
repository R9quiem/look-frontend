import './BottomHeader.sass'
import SearchBar from "../../UI/SearchBar/SearchBar";
import {ReactComponent as AccountSvg} from "../../../assets/account-icon.svg";
import {ReactComponent as FavoritesSvg} from "../../../assets/favorites-icon.svg";
import {ReactComponent as CartSvg} from "../../../assets/shopping_cart-icon.svg";
import {ReactComponent as OrdersSvg} from "../../../assets/orders-icon.svg";
import {ReactComponent as BurgerMenuSvg} from "../../../assets/burger_menu-icon.svg";
import {NavLink} from "react-router-dom";

function BottomHeader(props) {
  return (
    <header className="bottomheader">
      <div className="bottomheader__inner">
        <button className="bottomheader__menu">
          <BurgerMenuSvg/>
        </button>
        <NavLink to="/" className="bottomheader__logo-wrapper">
          <img src="/logo.png" alt="Лого" className="bottomheader__logo" />
        </NavLink>
        <SearchBar/>
        <nav className="bottomheader__nav">
          <a href="#" className="bottomheader__nav-link">
            <AccountSvg/>
            <span>Аккаунт</span>
          </a>
          <a href="#" className="bottomheader__nav-link">
            <FavoritesSvg/>
            <span>Закладки</span>
          </a>
          <a href="#" className="bottomheader__nav-link">
            <CartSvg/>
            <span>Корзина</span>
          </a>
          <a href="#" className="bottomheader__nav-link">
            <OrdersSvg/>
            <span>Заказы</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default BottomHeader;