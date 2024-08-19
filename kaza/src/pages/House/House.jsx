
import Navigation from './../../components/Navigation/Navigation';
import Footer from './../../components/Footer/Footer';
import Carrousel from './../../components/Carrousel/Carrousel';
import data from '../../data/logements.json'
import Container from './../../components/Container/Container';
import style from './House.module.css'
import Collapse from './../../components/Collapse/Collapse';
import active from '../../assets/star-active.png'
import inactive from '../../assets/star-inactive.png'
import {useParams } from 'react-router-dom';


const House = () => {

  const { id } = useParams();
  // console.log(id) 
  
  // Trouver la maison correspondant à l'ID
  const house = data.find((house) => house.id === id);
  // console.log(house)

  // Convertir la note en nombre
  const rating = parseInt(house.rating, 10);

  

  return (
    <>
      <Navigation />
      <Container>
        <>
          <Carrousel />  
          {/* {<img src= {house.pictures} alt="" />} */}
         
          <div className={style.houseBody}>
            <div className={style.houseHeader}>

              <div className={style.houseInfo}>
                <h2 className={style.houseITitle}>{house.title}</h2>
                <p>{house.location}</p>
                <div className={style.tags}>
                  {house.tags.map((tag)=>(
                    <div key={house.id} className={style.tag}>{tag}</div>
                  ))}
                </div>
              </div>

              <div className={style.hostContent}>
                <div className={style.host}>
                  <p className={style.hostName}>{house.host.name}</p>
                  <img src={house.host.picture} alt={house.host.name} className={style.hostImg} />
                </div>
                <div className={style.rates}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <img
                      key={star}
                      src={star <= rating ? active : inactive}
                      alt="rate"
                      className={style.rate}
                    />
                  ))}
                  
                </div>
              </div>

            </div>
            <div className={style.houseCollapses}>
              <div className={style.houseCollapse}><Collapse title ='Description' content={house.description}/></div>
              <div className={style.houseCollapse}><Collapse title ='Équipements' content={house.equipments}/></div>
            </div>
          </div>
        </>
      </Container>
      <Footer />
    </>
  )
}

export default House

// +add data + responsive page house about & home

// +add googlefont Montserrat
// +add

// map pour itérer sur les valeurs [1, 2, 3, 4, 5] qui représentent les 5 étoiles. Chaque étoile est remplie si sa position est inférieure ou égale à la note.
// Condition d'Affichage des Étoiles : Vérifie si la position de l'étoile (star) est inférieure ou égale à la note (rating). Si c'est le cas, l'étoile est remplie (active), sinon, elle est vide (inactive).