import React from 'react'

export default function Content() {
  return (
    <div>
      
     <header>
  {/* Intro settings */}
  <style dangerouslySetInnerHTML={{__html: "\n    /* Default height for small devices */\n    #intro-example {\n      height: 400px;\n    }\n\n    /* Height for devices larger than 992px */\n    @media (min-width: 992px) {\n      #intro-example {\n        height: 600px;\n      }\n    }\n  " }} />
  {/* Navbar */}

  {/* Navbar */}
  {/* Background image */}
  <div id="intro-example" className="p-5 text-center bg-image" style={{backgroundImage: 'url("https://media.discordapp.net/attachments/939903608638550076/1017720269097422929/unknown.png?width=1007&height=671")'}}>
    <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h1 className="mb-3">Portfolio</h1>
          <h5 className="mb-4">Chayakorn hiamnuch</h5>
          <a className="btn btn-outline-light btn-lg m-2" href="http://localhost:3001/Report" role="button" rel="nofollow" target="_blank">About me</a>
          <a className="btn btn-outline-light btn-lg m-2" href="http://localhost:3001/gallery" target="_blank" role="button">Gallery</a>
        </div>
      </div>
    </div>
  </div>
  {/* Background image */}
</header>

    </div>
  )
}
