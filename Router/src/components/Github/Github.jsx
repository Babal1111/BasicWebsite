import { useEffect,useState } from "react"

export default function Github(){
    const [repos, setRepos] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/babal1111').then((res)=> res.json().then(data =>{

            setRepos(data);
        } ))

    },[])
    return (
       
        <>
        
        <div className="text-center m-4">
            Github followers :{repos.followers}
            <img src={repos.avatar_url} alt="Github picture" width={300}></img>
        </div>
        </>
    )
}