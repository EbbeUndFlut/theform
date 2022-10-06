const Profile = ({pirat}) => {
    return (
        <div className="w-1/6 flex flex-row flex-nowrap">
            <img className="w-1/3 rounded-full"src={`http://localhost:9898/${pirat.piratesmile}`} alt={pirat.piratename} />
            <p className="font-lobster text-xl px-2">{pirat.piratename}</p>
        </div>
    )
}

export default Profile