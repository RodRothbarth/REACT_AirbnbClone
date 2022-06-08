import main_logo from '../../public/Assets/Images/airbnb1.png'

export default function NavBar() {
    return(
        <nav className="navbar_container">
            <img src={main_logo} className="main_logo" alt=""/>
        </nav>
    )
}
