import Head from 'next/head';

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
      </Head>
      <div className="home items-center space-x-4">
        <h3>
          As a trans Guatemalan/Cuban American boy-dyke, I am led to create the things that shine a light on the often misunderstood and the in-between. The harshness of the modern, colonized world often depresses my sensitive soul and the mysteries of laughter always revitalizes me back to my trickster nature. My work is &quot;political&quot; as the world forces the word onto my lived and born experiences…I was born in a border town often disguised as simply a beautiful tourist destination, Kayo Huseo…In more than a myriad of ways, &quot;No soy de aquí, ni soy de allá.&quot;
        </h3>
        <div className="flex items-center justify-center">
          <img src="/photos/HomePage.jpg" alt="" className="md:w-3/3 rounded shadow-lg" />
        </div>
      </div>
    </main>
  )
}