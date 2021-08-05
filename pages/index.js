import Head from 'next/head'
import React from 'react';

import COA from '../Components/COA/Coa'
import Featured from '../Components/Featured/Featured'
import Hero from '../Components/Hero/Hero'
import MainLayout from '../Components/Layouts/MainLayout'

import Testimonials from '../Components/Reviewss/Testimonals'



export default function Home() {
  return (

    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
  
      </Head>
      <Hero />
      <COA />
      <Featured />
      <Testimonials />



    </MainLayout>

    
  )
}
