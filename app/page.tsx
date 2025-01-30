

import Line from './components/line'
import Men_Movingcards from './components/movingcards'
// import Mens_Product from './components/mens_product'
// import Womens_Products from './components/womens_product'
// import Sharling_div from './components/sharling_div'
// import SharlingCard from './components/Sharling_card'

import Headers from './components/headers'
import TextSlider from './components/text_slider'
// import PageCard from './components/page_card'
// import Footer1 from './components/footer1'
// import Product_Card from './components/product_card'
import ImageWithMotion from './components/sale_bag'

export default function Home() {
  const sliderTexts = [
    "Welcome to our website!",
    "Find the best deals here.",
    "Don't miss our exclusive offers!",
    "Quality products at affordable prices.",
  ];

  return (
    <div className=''>
      {/* <Navbar2 /> */}
      <TextSlider text={sliderTexts} />
      <Headers />

      {/* <Product/> */}
      <Men_Movingcards title="right" />
      {/* <Line title="Women's Fashion Trends 2024"/>  */}
      {/* <Mens_Product img={"/Mens Product/3.jpg"} title="Men Urban Style Leather Varsity" dec="Wilsons" rating={2} price={130.00}/> */}
      {/* <Womens_Products/> */}
      {/* women sharling jackets div  */}
      {/* <PageCard id={1} image="/Blog images/blog image.jpg" price='666' description='jkjkj'/> */}
      {/* <div className='flex px-2 gap-2'><Product_Card /></div> */}
      {/* <Line title="Womens Shearling Jacket"/>
         <div className='mt-8'> <Sharling_div/></div> */}
      <ImageWithMotion/>

      <Line title="There are the different category of fashions trend" />

      {/* <ProductCarousel/> */}
     
    </div>
  )
}
