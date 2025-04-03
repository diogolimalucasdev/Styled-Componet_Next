import { Link } from "react-router-dom"
import { Titulo } from "./style"

export default function Home() {
    return (

        <div className="">
            <h1>Home</h1>
            <Link to='/about'>About</Link>
            <Titulo>Titulo por Styled component</Titulo>
        </div>

    )
}