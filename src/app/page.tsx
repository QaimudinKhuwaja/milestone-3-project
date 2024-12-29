import React from 'react'
import Hero from './component/Hero'
import Card from './component/Card'
import CardsDynamic from './component/CardsDynamic'
const page = () => {
  return (
    <div>
      <Hero />
      <CardsDynamic />
      <Card />
    </div>  
  )
}

export default page