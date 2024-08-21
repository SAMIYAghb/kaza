
import banner from '../../assets/banner-about.png';
import Banner from './../../components/Banner/Banner';
import Collapse from './../../components/Collapse/Collapse';
import collapseData from './about.json';

const About = () => {

  return (
    <>
      <Banner bannerImage={ banner } bannerTitle=''/>
        {
          collapseData.map((col) => (
            // console.log(col)
            // console.log(collapseData)
             <Collapse key={col.id}
              title={col.title}
              content={col.content}
            />
          )) 
        } 
    </>
  )
}

export default About
