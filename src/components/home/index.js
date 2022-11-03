import React from "react";
import { useState } from "react";
import PromotionCarousel from "./promotionCarousel";
import Header from "../shared/header";
import BrandList from "./brandList";
import FilteredList from "./filteredList";
import Footer from "../shared/footer";

const Home = () => {

  const [filter, setFilter] = useState('all')
  
  const brandFilter = (filterData) => {
    setFilter(filterData);
  }

  return (
    <div className='container'>
      <Header/>      
      <PromotionCarousel/>
      <BrandList brandFilter = {brandFilter}/>
      <FilteredList filter = {filter}/>
      <Footer/>      
    </div>
  )
}

export default Home