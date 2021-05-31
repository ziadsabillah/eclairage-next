import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Presentation from '../components/Sections/Presentation'
import Showcase from '../components/CategoryCard/Showcase'
import Contact from '../components/Contact'


export default function Home() {
  const  showcasedata = [
    {
        titleOne: 'Éclairage',
        titleTwo: 'Urbain',
        paragraph: "Luminaires LED au design unique et reconnaissable. Solutions d'éclairage pour aménager les rues, les avenues piétonnes, les parcs, les centres-villes, les zones urbaines et résidentielles, les pistes cyclables ou les parkings.",
        imgPath: ['/img/showcase-1.jpeg', '/img/showcase-urbain-1.jpeg']
    }, {
        titleOne: 'Éclairage',
        titleTwo: 'Historique',
        paragraph: "Lanternes de rue historiques et lampadaires historiques en fonte et fonte d'acier, du style «début du XXe siècle» aux solutions minimalistes les plus modernes adaptées à tout contexte urbain historique.",
        imgPath: ['/img/showcase-2.jpeg', '/img/showcase-history-1.jpeg']
    }, {
      titleOne: 'Projecteurs',
      titleTwo: '',
      paragraph: "Projecteurs LED professionnels à haute efficacité énergétique pour l'éclairage de grandes surfaces, installations sportives et contextes industriels intérieurs / extérieurs et projecteurs en ACIER INOXYDABLE pour tunnels.",
      imgPath:['/img/showcase-3.jpeg', '/img/showcase-proj-1.jpeg']
  }
  ]
  return (
    <Layout>
      <Hero />
      <Presentation />
      {showcasedata.map((item, index) => (
          <Showcase 
            key={index} side={index % 2} 
            titleOne={item.titleOne} titleTwo={item.titleTwo}
            paragraph={item.paragraph} imgPath={item.imgPath}
            href='/' />
      ))}
      <Contact />
    </Layout>
  )
}
