import React ,{useState }from 'react'
import ProgressBar from './ProgressBar'
import { projectFirestore } from "../firebase/config";

const UploadForm = () => {
    const [error, setError] = useState(null)
    const [file,setFile]=useState(null)
    const types=['image/png','image/jpeg']
    const changeHandler=(e)=>{
        let selected =e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('')
        }
        else{
            setFile(null)
            setError('Please select an image file (png or jpeg)')
        }
    }
    const showDeleteBtns=()=>{
        if(error){
            setError('')
        }
        let deleteIcon=document.getElementById('delete-icon')
        const deleteBtns=document.getElementsByClassName('delete-btn');
        if(deleteIcon.innerText==='-')
        {
            deleteIcon.innerHTML='&#10003'
            
            for(let i=0;i<deleteBtns.length;i++)
            {
                deleteBtns[i].style.display='flex'
                deleteBtns[i].onclick=deleteImage
            }
        }else{
            deleteIcon.innerHTML='-'
            for(let i=0;i<deleteBtns.length;i++)
            {
                deleteBtns[i].style.display='none'
            }
        }
    }

    const deleteImage=(e)=>{
        let container=e.target.parentElement.parentElement.parentElement
        let id=container.id
        const docRef=projectFirestore.collection('images').doc(id)
        docRef.delete().then(()=>{
            console.log('deleted successfully')
        }).catch((error)=>console.log('error',error))
        console.log(docRef)
    }

    return (
        <form>
            <div className='btns-container'>
                <label>
                    <input type="file" onChange={changeHandler} />
                    <span>+</span>
                </label>
                <label onClick={showDeleteBtns}>
                    <span id='delete-icon'>-</span>
                </label>
            </div>
            <div className="output">
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm
