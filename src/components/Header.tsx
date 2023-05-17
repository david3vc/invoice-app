import logo from '../assets/logo.svg'
import iconLuna from '../assets/icon-moon.svg'

const Header = () => {
    return (
        <div className="container-header">
            <div className="container-header__logo">
                <img src={logo} alt="" />
            </div>
            <div className="container-header__menu">
                <img src={iconLuna} alt="" />
            </div>
        </div>
    );
};

export default Header;
