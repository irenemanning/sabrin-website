
function Acting() {
  const iframeStyle = { borderRadius: '12px', border: 'none' }

  return (
    <div>
      <div className="flex space-x-4">
      <img src="/photos/Sabrinheadshot1.jpg" alt="" className="md:w-1/4 rounded shadow-lg" />
      <img src="/photos/Sabrinheadshot2.jpg" alt="" className="md:w-1/4 rounded shadow-lg" />
      <img src="/photos/Sabrinheadshot3.jpg" alt="" className="md:w-1/4 rounded shadow-lg" />
      <img src="/photos/Sabrinheadshot4.jpg" alt="" className="md:w-1/4 rounded shadow-lg" />
    </div>
    <p className="text-sm">Photographs by Alison Viana</p>
      <div className="md:ml-10 mt-10 mb-10">
        <h1>Somewhere Over The Pacific</h1>
        <iframe
          style={iframeStyle}
          src="https://open.spotify.com/embed/episode/4xP6oaZuyplMz0HvE3YmXu?utm_source=generator&theme=0"
          width="100%"
          height="352"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="md:ml-10 mt-10 mb-10">
        <h1>Tomorrow&apos;s Wish by Wade Bradford</h1>
        <iframe
          width="640"
          height="480"
          src="https://www.youtube.com/embed/Etdg9fPD0OU?si=niIAwA0OJZ5zTaNA"
          title="YouTube video player"
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="md:ml-10 mt-10 mb-10">
        <h1>Prodigal Son by John Patrick Shanley</h1>
        <iframe
          width="640"
          height="480"
          src="https://www.youtube.com/embed/c5qgeRSOauA?si=u6Yib_HcOSioo4p0"
          title="YouTube video player"
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="md:ml-10 mt-10 mb-10">
        <h1>Conjunction Not A Function</h1>
        <iframe
          width="640"
          height="480"
          src="https://www.youtube.com/embed/NgnFMl4Laeg?si=79PNffSwjQDPo8Gu"
          title="YouTube video player"
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="md:ml-10 mt-10 mb-10">
        <h1>Calvin Klein Campaigne</h1>
        <iframe
          src="https://drive.google.com/file/d/1UZ2eogu00EDEMWNYsWewZsvyW4FMgKNG/preview"
          width="640"
          height="480"
          allow="autoplay"
          style={{ border: 'none' }}
          allowFullScreen
        ></iframe>
      </div>
      <div className="md:ml-10 mt-10 mb-10">
        <h1>MUTT</h1>
        <iframe
          src="https://drive.google.com/file/d/16aPYzQjEC1L6ELSytcnOKjTKOT2a0ODT/preview"
          width="640"
          height="480"
          allow="autoplay"
          style={{ border: 'none' }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Acting