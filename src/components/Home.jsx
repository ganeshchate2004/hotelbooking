import React from 'react'
import './Home.css'
import { Container,Row,Col } from 'reactstrap'
import worldImg from '../assets/images/world.png'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from './Featured-tours/FeaturedTourList'
import MasonryImagesGallery from './image-gallery/MasonryImagesGallery'
import Testimonials from './Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'
import CardGrid from './CardGrid'

const Home = () => {
  return (
    <>
    <Container>
      <Row>
        <Col  lg="6">
        <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle={'Know Before You Go'}/>
            <img src={worldImg} alt="" />
          </div>
          <h1>Traveling opens the door to creating <span className="highlight">
            memories with best hotels</span></h1>
            <p>Travel offers the opportunity to explore new places and cultures. The right hotel enhances the experience, providing comfort and luxury, making every journey memorable</p>
        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
        </Col>
        <Col lg="2">
<div className="hero__img-box mt-4">
  <video src={heroVideo} alt="" controls autoPlay muted />
</div>

        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-5">
          <img src={heroImg02} alt="" />
        </div>
        </Col>
      </Row>
    </Container>
    <section>
      <Container>
        <Row>
          <Col lg ='12' className="mb-5">
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Our Top Hotels</h2>
          </Col>
          <CardGrid/>
        </Row>
      </Container>
    </section>

   
  

    </>
  )
}

export default Home
