
import Navigation from './../../components/Navigation/Navigation';
import Banner from './../../components/Banner/Banner';
import Container from './../../components/Container/Container';
import Footer from './../../components/Footer/Footer';
import Collapse from './../../components/Collapse/Collapse';
import banner from '../../assets/banner-about.png'
import collapseData from './about.json'

const About = () => {

  return (
    <>
      <Navigation />
      <Banner bannerImage={ banner }/>
      <Container>
        {
          collapseData.map((col) => (
            // console.log(col)
            // console.log(collapseData)
            <div key={col.id}>
             <Collapse
              id={col.id}
              title={col.title}
              content={col.content}
            />
            </div>
          )) 
        } 
      </Container>
      <Footer />
    </>
  )
}

export default About
