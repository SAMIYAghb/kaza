
import { Link } from 'react-router-dom';
import error from '../../assets/404.png';
import style from './Error.module.css';

const Error = () => {
  return (
    <>
          <div className={style.error}>
              <img src={error} alt="error image"  className={style.errorImg}/>
              <h2  className={style.errorTitle}>Oups! La page que vous demandez n&apos;existe pas.</h2>
              <Link  className={style.errorLink} to="/">Retournez sur la page d&apos;accueil</Link>
          </div>
    </>
  )
}

export default Error
