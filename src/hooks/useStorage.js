import { useState,useEffect } from "react";
import { projectStorage,projectFirestore, timeStamp } from "../firebase/config";

const useStorage=(file)=>{
    const [progress, setProgress] = useState();
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        //reference
        const storageRef=projectStorage.ref(file.name);
        const collectionRef=projectFirestore.collection('images');
        storageRef.put(file).on('state_changed',(snapshot)=>{
            let percentage=(snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            setProgress(percentage);
        },(err)=>{
            setError(err);
        },async ()=>{
            const url =await storageRef.getDownloadURL();
            const createdAt=timeStamp();
            collectionRef.add({url,createdAt});
            setUrl(url);
        })
    },[file])

    return {progress,url,error}
}

export default useStorage;