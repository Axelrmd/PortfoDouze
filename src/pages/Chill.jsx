import Header from '../Component/Chill/Header';
import AsideBar from '../Component/Chill/AsideBar';
import "../style/Chill.css";

const Chill = () => {
    return (
        <>
            {/* Header */}
            <Header />
            {/* Page */}
            <div className='page-chill'>
                {/* Aside pas forcement ouvert pour ne pas embrouillé */}
                <AsideBar />
                {/* La page de bienvenue */}
            </div>
        </>
    );
}


export default Chill;