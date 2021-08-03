import React from 'react'
import useFirestore from '../hooks/useFirestore'

import Image from './Image'

const ImageGrid = ({setSelectedImg}) => {
    const {docs}=useFirestore('images')
    return (
        <div className='img-grid'>
            {docs && docs.map(doc=>(
                <Image doc={doc} setSelectedImg={setSelectedImg} key={doc.id} />
            ))}
        </div>
    )
}

export default ImageGrid
