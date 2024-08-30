
import { Navigate, useParams } from 'react-router-dom';
import active from '../../assets/star-active.png';
import inactive from '../../assets/star-inactive.png';
import Carrousel from './../../components/Carrousel/Carrousel';
import Collapse from './../../components/Collapse/Collapse';
// import Error from './../Error/Error';
import style from './House.module.css';
import { getLogement } from '../../request/LogementRequest.js'
import Tag from '../../components/Tag/Tag.jsx';
import Rating from '../../components/Rating/Rating.jsx';

const House = () => {
  // const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id) 

  // Trouver la maison correspondant à l'ID
  const house = getLogement(id);
  // console.log(house.pictures)

  // +add useNagate
  if (!house) {
    // return <Error />
    return <Navigate to="*" />; 
  }

  return (
    <>
      <Carrousel images={house.pictures} />
      <div className={style.houseBody}>
        <div className={style.houseHeader}>

          <div className={style.houseInfo}>
            <h2 className={style.houseITitle}>{house.title}</h2>
            <p>{house.location}</p>
            <div className={style.tags}>
              {house.tags.map((tag) => (
                <Tag
                  key={tag}
                  tag={tag} />
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
                <Rating
                  key={star}
                  src={star <= house.rating ? active : inactive}
                />
              ))}
            </div>
          </div>

        </div>
        <section className={style.houseCollapses}>
          <div className={style.houseCollapse}>
            <Collapse title='Description' content={house.description} />
          </div>
          <div className={style.houseCollapse}>
            <Collapse title='Équipements' content={house.equipments} />
          </div>
        </section>
      </div>
    </>
  )
}

export default House



// +add animation ouvre collapse dans house / about
// +add tite banner dans house responsive
// +add texte banner dans 404 responsive

// map pour itérer sur les valeurs [1, 2, 3, 4, 5] qui représentent les 5 étoiles. Chaque étoile est remplie si sa position est inférieure ou égale à la note.
// Condition d'Affichage des Étoiles : Vérifie si la position de l'étoile (star) est inférieure ou égale à la note (rating). Si c'est le cas, l'étoile est remplie (active), sinon, elle est vide (inactive).

