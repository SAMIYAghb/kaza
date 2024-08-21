
import Banner from './../../components/Banner/Banner';
import banner from '../../assets/banner.png';
import Card from '../../components/Card/Card';
import style from './Home.module.css';
import { getLogements } from '../../request/LogementRequest.js'


const Home = () => {
  const logements = getLogements();

  return (
    <>
      <Banner bannerImage={banner} bannerTitle='Chez vous, partout et ailleurs' />
      <div className={style.cards}>
        {logements.map((logement) =>
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />           
        )}
      </div>
    </>
  )
}

export default Home


// useLoaderData est un hook fourni par react-router (dans la version 6.4 et ultérieure) qui vous permet d'accéder aux données chargées par les loaders définis dans votre configuration de routes.