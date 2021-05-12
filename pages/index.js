import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Presentation from '../components/Sections/Presentation'
import Showcase from '../components/CategoryCard/Showcase'
import {showcasedata} from '../data/showcase'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Presentation />
      {showcasedata.map((item, index) => {
        <Showcase key={index} side={showcasedata.indexOf(item) % 2} titleOne={item.titleOne} titleTwo={item.titleTwo}
          paragraph={item.paragraph} imgPath={item.imgPath} href='/' />
      })}
      
    </Layout>
  )
}
