import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Presentation from '../components/Sections/Presentation'
import LeftShowcase from '../components/CategoryCard/LeftShowcase'


export default function Home() {
  return (
    <Layout>
      <Hero />
      <Presentation />
      <LeftShowcase />
    </Layout>
  )
}
