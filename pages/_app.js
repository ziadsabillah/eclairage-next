import '../styles/globals.css'
import 'react-multi-carousel/lib/styles.css'
import 'react-slideshow-image/dist/styles.css'
import 'bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
