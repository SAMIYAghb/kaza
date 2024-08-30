import PropTypes from 'prop-types';
import style from './Banner.module.css';

function Banner({ bannerImage , bannerTitle}) {
  return (
    <div className={style.banner}>
        <div className={style.imgParent}>
          <img src={ bannerImage } alt="banner of kaza" className={style.imgBanner}/>
        </div>
        { bannerTitle && (<h1 className={style.bannerTitle}>{bannerTitle}</h1>) }
        
    </div>
  )
}
Banner.propTypes = {
  bannerImage: PropTypes.node.isRequired,
  bannerTitle: PropTypes.node.isRequired,
};
export default Banner
