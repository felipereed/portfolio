import React from "react";
import Layout from "./shared/Layout.js";
import Project from "./Project"

export default function Home() {
  const projectImages = [
    {
      src: '/images/artlist.png',
      alt: 'artlist'
    },
    {
      src: '/images/shipt.png',
      alt: 'shipt'
    },
    {
      src: '/images/mood4.png',
      alt: 'mood 4'
    },
    {
      src: '/images/planmytrip.png',
      alt: 'plan my trip'
    }
  ]
  return (
    <div>
      <Layout>
        {projectImages.map(item => (
          <Project src={item.src} alt={item.alt} key={item.src}/>
        ))}
      </Layout>
    </div>
  )
    
}
