import style from '../../pages/House/House.module.css'
import PropTypes from 'prop-types';


const Rating = ({ src }) => {
  return (
    <>
      <img
        src={src}
        alt="rate"
        className={style.rate}
      />
    </>
  )
}
Rating.propTypes = {
  src: PropTypes.node.isRequired,
};
export default Rating
