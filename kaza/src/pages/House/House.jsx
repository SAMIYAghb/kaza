
import Navigation from './../../components/Navigation/Navigation';
import Footer from './../../components/Footer/Footer';
import Carrousel from './../../components/Carrousel/Carrousel';
import data from '../../data/logements.json'
import Container from './../../components/Container/Container';
import host from '../../assets/Host.png'
import style from './House.module.css'
import Collapse from './../../components/Collapse/Collapse';
import active from '../../assets/star-active.png'
import inactive from '../../assets/star-inactive.png'

const House = () => {
  const house = data.map((ele)=>{return ele});
  // console.log(house);
  return (
    <>
      <Navigation />
      <Container>
        {/* {data.map((logement) =>
        <div key={logement.id}> */}
        {/* <Carrousel key={logement.id} 
          pictures={logement.pictures}
          title ={logement.title}
          /> */}
        {/* <h2>{logement.title}</h2>
        </div> */}

        {/* )}       */}
        <>
          <Carrousel />

          <div className="houseBody">
            <div className={style.houseHeader}>
              <div className={style.houseInfo}>
                <h2 className={style.houseITitle}>titre{house.title} </h2>
                <p>paris, ile de france</p>
              </div>
              <div className={style.host}>
                <p className={style.hostName}>name hghuvuyv</p>
                <img src={host} alt="" className={style.hostImg}/>
              </div>
            </div>
            <div className={style.houseContent}>
                <div className={style.tags}>
                  <div className={style.tag}>tag</div>
                  <div className={style.tag}>tag</div>
                  <div className={style.tag}>tag</div>
                </div>
                
                <div className={style.rates}>
                  <img src={active} alt="rate" className={style.rate}/>
                  <img src={inactive} alt="rate" className={style.rate}/>
                  <img src={inactive} alt="rate" className={style.rate}/>
                  <img src={inactive} alt="rate" className={style.rate}/>
                </div>
            </div>
            <div className={style.houseCollapses}>
              <div className={style.houseCollapse}><Collapse/></div>
              <div className={style.houseCollapse}><Collapse/></div>   
            </div>
          </div>
        </>
      </Container>
      <Footer />
    </>
  )
}

export default House


