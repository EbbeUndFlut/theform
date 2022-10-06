import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NewProfile = () => {
    const [pirateName, setPiratename] = useState('')
    const [profilePic, setProfilePic] = useState(null)
    const nav = useNavigate()
    const sendData = () => {
        console.log('object');
        const form = new FormData()
        form.append('profilename', pirateName)
        form.append('profilepic', profilePic)

        fetch('http://localhost:9898/pirates', {
            method:'POST',
            body:form
        })
        .then(res => res.status === 200 ? nav('/'): null)
    }
    return (
        <main class="h-screen flex flex-col justify-center items-center bg-purple-400">
            <h1 className="text-5xl font-lobster">Welcome new <span className="text-purple-800 underline">Pirate</span></h1>
            <section className="mt-10">
                <input className="px-5 py-3" type="text" name="profilename" id="" placeholder="Enter your Piratename"  onChange={(e) => setPiratename(e.target.value)}/>
                <div className="text-center flex justify-center">
                 <input className="hidden" type="file" name="profilepic" id="profilepic" onChange={(e) => setProfilePic(e.target.files[0])}/>
                <label className="pt-5 mt-10 text-center block h-[100px] w-[100px] cursor-pointer rounded-full border-4 border-purple-800" htmlFor="profilepic">Show us your smile</label>   
                </div>
                <button className="bg-purple-800 hover:bg-purple-600 mt-8 px-2 py-1 text-white w-full" onClick={sendData}>Sail away</button>
                
            </section>

        </main>
    )
}

export default NewProfile