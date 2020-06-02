import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Skius from './skius';
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const IndexPage = () => {
  const {placeholderImage, astronaut,
    seamlessBackground} = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-uni.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      astronaut: file(relativePath: { eq: "gatsby-happy.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seamlessBackground: file(
          relativePath: { eq: "gatsby-dot.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
     
    }

  `)

const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: placeholderImage.childImageSharp.fluid.src
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: astronaut.childImageSharp.fluid.src
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: seamlessBackground.childImageSharp.fluid.src
  }
];
  
  return (
    <Layout page="Home">
      <SEO title="Home" />
      {/* <section className="swiper-container swiper-slider" style={{ zIndex: `1`, backgroundImage: `url(${data.placeholderImage.childImageSharp.fluid.src})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center bottom`, maxHeight: `35rem`, height: `25rem`, display: `flex`, alignItems: `center` }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h2 className="text-white">Enjoy Your Dream Vacation</h2>
              <p className="h6 text-white">Travel to the any corner of the world, without going around in circles.</p>
              <Button variant="contained" color="secondary" style={{ marginTop: `3rem` }}>
                Buy Tour
                <span className="material-icons"> shopping_cart</span>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
<Slider className="slider-wrapper" autoplay={10000}>
        {content.map((item, index) => (
          
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button className="btn btn-primary">{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
   
       <Container component="section" className="section-50 section-md-bottom-50 bg-wild-wand">
        <Container component="div"   >
          <Skius />
        </Container>
      </Container>

      <Container component="section" maxWidth={false} className="section-50 section-md-top-50 bg-white">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>


            <div className="col-lg-6 text-center">
              <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image src="gatsby-astronaut.png" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container component="section" maxWidth={false} className="section-50 section-md-bottom-50 bg-wild-wand">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-10 col-lg-8 text-center text-md-right">
              <h2 className="col-12 text-center ">Get a custom tour</h2>
              <h6 className="col-12 text-center ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
            </div>
            <div className="col-lg-2 text-center d-flex align-items-center"><Link to="/page-2" style={{ textDecoration: `none` }}>
               <Button variant="contained" color="secondary">
                Make tour
              </Button> 
              
            </Link></div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage