import style from './Card.module.css';
import PropTypes from 'prop-types';
// import card from '../../assets/card.png';
// import { Link } from 'react-router-dom';

const Card = ({title, cover}) => {
  return (
    <>
        <div className={style.card}>
          <img src={cover} alt={title} className={style.cardImg}/>
          <h4 className={style.cardTitle}>{title}</h4>
        </div>   
    </>

  )
}
Card.propTypes = {
  title : PropTypes.node.isRequired,
  cover : PropTypes.node.isRequired,
};
export default Card
