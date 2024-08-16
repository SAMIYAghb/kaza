
import Footer from './../../components/Footer/Footer';
import Navigation from './../../components/Navigation/Navigation';
import { Link } from 'react-router-dom';
import style from './Error.module.css'
import error from '../../assets/404.png'
import Container from '../../components/Container/Container';

const Error = () => {
  return (
    <>
      <Navigation />
        <Container>
          <div className={style.error}>
              <img src={error} alt=""  className={style.errorImg}/>
              <h2  className={style.errorTitle}>Oups! La page que vous demandez n&apos;existe pas.</h2>
              <Link  className={style.errorLink} to="/">Retournez sur la page d&apos;accueil</Link>
          </div>
        </Container>
      <Footer />
    </>
  )
}

export default Error
