import style from './Card.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Card = ({ title, cover, id }) => {
  return (
    <>
      <div className={style.card}>
        <Link to={'/house/' + id} key={id} className={style.link}>
          <img src={cover} alt={title} className={style.cardImg} />
          <h2 className={style.cardTitle}>{title}</h2>
        </Link>
      </div>
    </>

  )
}
Card.propTypes = {
  id: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  cover: PropTypes.node.isRequired,
};
export default Card
