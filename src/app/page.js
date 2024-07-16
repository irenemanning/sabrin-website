import Head from 'next/head';
import {   } from '@next/font/google'
export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Playwrite+CU&display=swap');
      </style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+CU&display=swap" rel="stylesheet" />
        <style>{`
          .playwrite-cu {
            font-family: 'Playwrite CU', cursive;
          }
        `}</style>
      </Head>
      <div className="home items-center space-x-4">
        <h3 className="playwrite-cu">
          As a trans Guatemalan/Cuban American boy-dyke, I am led to create the things that shine a light on the often misunderstood and the in-between. The harshness of the modern, colonized world often depresses my sensitive soul and the mysteries of laughter always revitalizes me back to my trickster nature. My work is “political” as the world forces the word onto my lived and born experiences…I was born in a border town often disguised as simply a beautiful tourist destination, Kayo Huseo…In more than a myriad of ways, “No soy de aquí, ni soy de allá.”
        </h3>
        <div className="flex items-center justify-center">
          <img src="/photos/HomePage.jpg" alt="" className="md:w-3/3 rounded shadow-lg" />
        </div>
      </div>
    </main>
  )
}