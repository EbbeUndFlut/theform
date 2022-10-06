const { useState } = require("react")

const TheForm = (props) => {
    const [username, setUserName] = useState('')
    const [profilePic, setProfilePic] = useState(null)

    return (
        <form action={props.action} method={props.method}>
            <input type="text" name="username" id="" placeholder="Username" />
            <input type="file"></input>
        </form>
    )
}