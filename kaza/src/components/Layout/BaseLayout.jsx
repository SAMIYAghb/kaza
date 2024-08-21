import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import Footer from './../Footer/Footer';
import '../../App.css'

const BaseLayout = () => {
    return (
        <>
            <div className='container'>
                <Navigation />
                    <main>
                        <Outlet />
                    </main>
            </div>
            <Footer />
        </>
    )
}

export default BaseLayout
