import style from './Banner.module.css'
import banner from '../../assets/banner.png'
import Container from '../Container/Container.jsx';

function Banner() {
  return (
    <div className={style.banner}>
      <Container>
        <img src={banner} alt="banner of kaza" className={style.imgBanner}/>
        <h1 className={style.bannerTitle}>Chez vous, partout et ailleurs</h1>
      </Container>
    </div>
  )
}

export default Banner
