import ProfileList from "../components/ProfileList"

const Home = () => {
    return (
        <main className="h-screen flex flex-col justify-center items-center bg-purple-400 ">
            <h1 className="text-5xl font-lobster">Coding <span className="text-purple-800 underline">Piraten</span></h1>
            <ProfileList />
        </main>
    )
}

export default Home