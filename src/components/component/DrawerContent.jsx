import React from 'react';
import Header from './Header';
import Head from './Head';
import HeroContent from './HeroContent';
import PopularCourses from './PopularCourses';
import Footerapp from './Footerapp';
import './DrawerContent.css'; // Importez le fichier CSS
import './margin.css'; // Importez le fichier margin.css

function DrawerContent() {
    return (
        <div className="drawer-content">
            <Head/>
            <Header />
            <HeroContent />
            <PopularCourses />
            
            <Footerapp />
        </div>
    );
}

export default DrawerContent;