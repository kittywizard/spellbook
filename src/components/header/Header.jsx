import "./header.css"
import Nav from "../nav/Nav"


export default function Header() {
    return (
        <header className="header">
            <Nav />
            <h3>Spellbook</h3>
        </header>
    )
}