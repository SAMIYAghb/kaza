import { NavLink } from "react-router-dom"
import Logo from "../../assets/logo.png"
import style from './Navigation.module.css'
import Container from './../Container/Container';

const Navigation = () => {
  return (
    <header>
      <Container>
        <div className={style.header}>
          <img src={Logo} alt="Logo kasa" className={style.logoImg}/>
          <nav className={style.nav}>
            <NavLink to="/"
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.activeLink}` : style.link
            }
            >
              Accueil
            </NavLink>
            <NavLink to="/about" 
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.activeLink}` : style.link
            }
            >
              A propos
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Navigation
