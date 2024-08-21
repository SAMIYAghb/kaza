
import Banner from './../../components/Banner/Banner';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner.png';
import Card from '../../components/Card/Card';
import data from '../../data/logements.json';
import style from './Home.module.css';
// import banner from '../../assets/homeBanner.png'
// import { useLoaderData,Link } from 'react-router-dom';

const Home = () => {
  // const data = useLoaderData();

  return (  
    <>
    <Banner bannerImage={ banner } />
        <div className={style.cards}>
          {data.map((logement)=>
          // console.log(logement)
          <Link to={'/house/'+ logement.id} key={logement.id} className={style.link}>
            <div>
              <Card 
            title = {logement.title}
            cover = {logement.cover}         
            />
            </div>
          </Link>            
          )}
        </div>a
    </>
  )
}

export default Home


// useLoaderData est un hook fourni par react-router (dans la version 6.4 et ultérieure) qui vous permet d'accéder aux données chargées par les loaders définis dans votre configuration de routes.