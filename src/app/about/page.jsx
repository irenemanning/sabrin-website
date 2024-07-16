function About() {
    return (
      <div>
        <div className="flex flex-col md:flex-row md:items-start">
          <div className="flex flex-col md:w-1/3 space-y-4">
            <img src="/photos/Sabrin-123.jpg" alt="" className="md:w-auto rounded shadow-lg" />
            <img src="/photos/Sabrin-5.jpg" alt="" className="md:w-auto rounded shadow-lg" />
            {/* <img src="/photos/Sabrin-225.jpg" alt="" className="md:w-auto rounded shadow-lg" /> */}
          </div>
          
          <div className="flex-1 md:ml-20">
            <h3 className="md:ml-10 mt-5 mb-5">
            Sabrín Diehl (they/he) is a Miami based interdisciplinary artist; Working within the mediums of performance art, comedy, writing, acting, and filmmaking. They are most known for having created, written, produced and performed in largely well-received original sketch-comedy plays and one person shows. However, they also enjoy the quieter forms such as photography, poetry, and drawing. 
            </h3>

            <h3 className="md:ml-10 mt-5 mb-5">
            Sabrín’s most recent work was acting in the world premiere of #Graced at the Adrienne Arsht Center. They have created an original sketch-comedy play, Latins on ICE, that premiered on the frozen Lake Nokomis in Minneapolis, MN. He has a one-person radio play Somewhere Over the Rainbow, produced by Picnic Basket Theater, available on all podcast streaming platforms. They have also created, written, directed, and produced multiple independent short-films. They have worked with the Guthrie Theater, Mixed Blood Theater, Abre Camino Collective, Penumbra Theatre, Black Label Movement, HUGE Theater, and many more. They have trained with The Margolis Method and the Guthrie Theater and are a graduate of New World School of the Arts (Miami) and of the University of Minnesota (Twin Cities) with a B.A. in Theater. 
            </h3>

            <h3 className="md:ml-10 mt-5 mb-5">Sabrín hosts alternative comedy shows at his house and has near future plans of beginning an alternative comedy show in their Miami hometown.</h3>
          </div>
          
        </div>
        <div className="my-20">
          <h1>Short Documentary On Sabrín’s Work</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/voXCMvou3iQ?si=VP6K81vNw4f_keR6"
            title="YouTube video player"
            style={{ border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )
  }
  
  export default About