import style from './About.module.css'
import banner from '../../assets/banner-about.png';
import Banner from './../../components/Banner/Banner';
import Collapse from './../../components/Collapse/Collapse';
import collapseData from './about.json';

const About = () => {

  return (
    <>
      <Banner bannerImage={ banner } bannerTitle=''/>
      <div className={style.about}>
        {
          collapseData.map((col) => (
             <Collapse 
              key={col.id}
              title={col.title}
              content={col.content}
            />
          )) 
        } 
      </div>
    </>
  )
}

export default About
