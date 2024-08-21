
import banner from '../../assets/banner-about.png';
import Banner from './../../components/Banner/Banner';
import Collapse from './../../components/Collapse/Collapse';
import collapseData from './about.json';

const About = () => {

  return (
    <>
      <Banner bannerImage={ banner }/>
        {
          collapseData.map((col) => (
            // console.log(col)
            // console.log(collapseData)
            <div key={col.id}>
             <Collapse
              title={col.title}
              content={col.content}
            />
            </div>
          )) 
        } 
    </>
  )
}

export default About
