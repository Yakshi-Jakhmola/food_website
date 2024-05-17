import React, { useState } from "react"
import Header from "./Component/Header"
import MainBanner from "./Pages/MainBanner"
import FoodCategory from "./Pages/FoodCategory"
import FoodCard from "./Pages/FoodCard"
import Footer from "./Pages/Footer"

function App() {
  const [category, setcategory] = useState('All')
  return (
    <>
      <Header/>
      <MainBanner/>
      <FoodCategory category={category} setcategory={setcategory}/>
      <FoodCard category={category} setcategory={setcategory}/>
      <Footer/>
    </>
  )
}

export default App
