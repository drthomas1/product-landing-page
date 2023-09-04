import "./menu.scss"

export default function Menu( { menuOpen, setMenuOpen } ) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
        <ul>
            <li onClick={ ()=>setMenuOpen(!menuOpen) } >
                <a href="#intro">Intro</a>
            </li>
            <li onClick={ ()=>setMenuOpen(!menuOpen) } >
                <a href="#purchase">Purchase</a>
            </li>
            <li onClick={ ()=>setMenuOpen(!menuOpen) } >
                <a href="#about">About</a>
            </li>
            <li onClick={ ()=>setMenuOpen(!menuOpen) } >
                <a href="#video">Video</a>
            </li>
            <li onClick={ ()=>setMenuOpen(!menuOpen) } >
                <a href="#gallery">Gallery</a>
            </li>
            <li onClick={ ()=>setMenuOpen(!menuOpen) } >
                <a href="#related">Related</a>
            </li>
            <li onClick={ ()=>setMenuOpen(!menuOpen) } >
                <a href="#signup">Sign Up</a>
            </li>
        </ul>
    </div>
  )
}