import style from './Footer.module.css';
import logo from '../../assets/footerLogo.png'

const Footer = () => {
  return (
    <div className={style.footer}>
      <img src={logo} alt="logo of footer" className={style.footerLogo}/>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
