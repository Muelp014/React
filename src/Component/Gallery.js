import React from 'react'

export default function Gallery() {
  return (
    <div>
<div>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <style dangerouslySetInnerHTML={{__html: "\nbody,h1 {font-family: \"Montserrat\", sans-serif}\nimg {margin-bottom: -7px}\n.w3-row-padding img {margin-bottom: 12px}\n" }} />
  {/* Sidebar */}
  <nav className="w3-sidebar w3-black w3-animate-top w3-xxlarge" style={{display: 'none', paddingTop: 150}} id="mySidebar">
    
    <div className="w3-bar-block w3-center">
      <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">About</a>
      <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Photos</a>
      <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Shop</a>
      <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Contact</a>
    </div>
  </nav>
  {/* !PAGE CONTENT! */}
  <div className="w3-content" style={{maxWidth: 1500}}>
    {/* Header */}
    <div className="w3-opacity">
      
      <div className="w3-clear" />
      <header className="w3-center w3-margin-bottom">
        <h1><b>Gallery</b></h1>
      </header>
    </div>
    {/* Photo Grid */}
    <div className="w3-row" id="myGrid" style={{marginBottom: 128}}>
      <div className="w3-third">
        <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/293792056_3347484788832930_7213368093348023394_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE-77lI3THu9BlkxyoyYC7Zdf1yXorMu191_XJeisy7X9kAv3udhZPgpWU98Km36e6og90uPLhGKFL-wDWjVKx8&_nc_ohc=XPOVkLb1uOYAX_Dys_u&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT-BXU8peBBnDI7h2ZFml6YkBtgklChf3ndo41YoOuSfyA&oe=63207E74" style={{width: '80%'}} />
      </div>
      <div className="w3-third">
        <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/293804607_3347485135499562_4570503197514917681_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFnzX5VbHL0ESXcSf1xloC9LClDb_bcgZIsKUNv9tyBkigKn3_97O0HptHPN5CJ2vMrdmh8WSE69xuJSs6nBmgF&_nc_ohc=rpkVRKbEOVoAX8M9gxh&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT96WhvHGlMS5ETFqOvUplKrwvpBa72hFpRKcDSDh7JEJw&oe=63200284" style={{width: '80%'}} />
      </div>
      <div className="w3-third">
        <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/293491348_3347484712166271_7924339001615579419_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEhzHXs-z4c4H5noDWi8c71BhQ3wtHpvbgGFDfC0em9uF3CytYXdEqUK8WmF7VKSZiouef8urd6Xb0WBUd1ca94&_nc_ohc=ufAyIItOI-wAX8A1FbT&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT-ln44J2nCriWurqSyQOGN1TeBWxu0-hiW-68VMRk9fBg&oe=631F44AA" style={{width: '80%'}} />
      </div>
  </div>
</div>
</div>
</div>
  )
}
