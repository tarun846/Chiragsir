import React from 'react'

function Bookcomponent({image,published,author}) {
    return (
        <div>
             <div className = 'content' >
        <img src = {image} />
     <div className = 'details' >
     <h2> {author}  </h2>
      
     </div>
      </div>
        </div>
    )
}

export default Bookcomponent
