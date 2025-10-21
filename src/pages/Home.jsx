import React from "react";
import Header from "../components/Header/Header";  
import HeroSlider from "../components/BodySection/HeroSlider";
import FeaturedProduct from '../components/BodySection/FeaturedProducts';
import ProductTabsGrid from '../components/BodySection/ProductsTabGrid';
import Advantages from "../components/BodySection/Advantages";
import Footer from '../components/Footer'  
import ProductDetailPage from "../context/ProductDetailPage";

// import Footer from "../components/Footer/Footer";

function HomePage() {
    return (
        <div>
            <Header/> 
            <HeroSlider />
            <FeaturedProduct/>
            <ProductTabsGrid/> 
            <Advantages/> 
            <ProductDetailPage/>
            <Footer/>
        </div>
    )
}

export default HomePage