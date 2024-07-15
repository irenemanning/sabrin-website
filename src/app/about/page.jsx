function About() {
    return (
      <div>
        <h1>About Sabo</h1>
        <div className="flex flex-col md:flex-row md:items-start">
          <div className="flex flex-col md:w-1/3 space-y-4">
            <img src="/photos/Sabrin-123.jpg" alt="" className="md:w-auto rounded shadow-lg" />
            <img src="/photos/Sabrin-5.jpg" alt="" className="md:w-auto rounded shadow-lg" />
            <img src="/photos/Sabrin-225.jpg" alt="" className="md:w-auto rounded shadow-lg" />
          </div>
          <h3 className="flex-1 md:ml-20">
            LONG BIO LONG BIO LONG BIO LONG BIOLONG BIOLONG BIOLONG BIOLONG BIOLONG BIOLONG BIOLONG BIOLONG BIOLONG BIO LONG BIO LONG BIO LONG BIO LONG BIOLONG BIOLONG BIOLONG BIOLONG BIOLONG BIOLONG BIOLONG BIOLONG BIOLONG
          </h3>
        </div>
        <div className="my-20">
          <h1>PBS Artist Statement</h1>
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