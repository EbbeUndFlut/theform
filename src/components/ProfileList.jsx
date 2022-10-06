import { useEffect, useState } from "react"
import Profile from '../components/Profile'
const ProfileList = () => {
    const [piraten, setPiraten] = useState([])

    useEffect(() => {
        fetch('http://localhost:9898/pirates')
        .then(res => res.json())
        .then(data => setPiraten(data))
    },[])

    return (
        <section className="w-full flex flex-row flex-wrap px-10 py-10">
            {piraten.map((pirat, key) => 
                <Profile key={key} pirat={pirat} />)}
        </section>
    )
}

export default ProfileList