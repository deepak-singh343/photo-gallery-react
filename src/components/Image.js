import React from 'react'
import { motion } from 'framer-motion'
import deleteIcon from '../deleteIcon.png'

const Image = ({doc,setSelectedImg}) => {
    return (
        <div className='container' id={doc.id}>
            <motion.div className="img-wrap"
                    layout
                    >
                    <motion.img src={doc.url} alt="uploaded-pic" 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        onClick={()=>setSelectedImg(doc.url)}
                    />
                   <div className='delete-btn'>
                        <img src={deleteIcon} alt="close" className='delete-btn-icon'/>
                    </div>
            </motion.div>
        </div>
    )
}

export default Image
