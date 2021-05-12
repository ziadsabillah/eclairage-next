
import Head from 'next/head';
import dynamic from 'next/dynamic'

const FooterDynamic = dynamic(() => import('./Sections/Footer'), { ssr: false})
import Navbar from './Navbar/CustomNavbar';

const Layout = (props) => {
    return (
        <>
            <div className="app">
                <Head>
                    <title>{props.title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <header className="main-header fixed-header">
                    <Navbar />
                </header>
                <main>
                    {props.children}
                </main>
                <FooterDynamic />
            </div>
        </>
    )
}

export default Layout;