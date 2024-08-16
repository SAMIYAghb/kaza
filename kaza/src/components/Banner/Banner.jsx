import style from './Banner.module.css'
import PropTypes from 'prop-types';
import Container from '../Container/Container.jsx';

function Banner({ bannerImage }) {
  return (
    <div className={style.banner}>
      <Container>
        <img src={ bannerImage } alt="banner of kaza" className={style.imgBanner}/>
        <h1 className={style.bannerTitle}>Chez vous, partout et ailleurs</h1>
      </Container>
    </div>
  )
}
Banner.propTypes = {
  bannerImage: PropTypes.node.isRequired,
};
export default Banner
