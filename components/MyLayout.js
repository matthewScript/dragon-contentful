import Header from './Header'
import Footer from './Footer';

import "../styles.scss"

const Layout = (props) => (
    <div>
        {process.env.REACT_APP_SPACE}
        <Header />
        <main className="content view-height">
            {props.children}
        </main>
        <Footer />
    </div>
)

export default Layout
