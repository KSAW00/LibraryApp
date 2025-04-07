import { Link } from "react-router-dom"

function NotFound(){
    return <>
    <h2>OOPS NOT FOUND?!</h2>
    <Link to="/">
                <button>Back to Home</button>
    </Link>
    </>
}

export default NotFound