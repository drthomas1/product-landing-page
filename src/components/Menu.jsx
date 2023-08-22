import "./menu.scss"

export default function Menu( { menuOpen, setMenuOpen } ) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
        <ul>
            <li onClick={ ()=>setMenuOpen(!menuOpen) } >
                <a href="#intro">Intro</a>
            </li>
            <li onClick={ ()=>setMenuOpen(!menuOpen) } >
                <a href="#portfolio">Purchase</a>
            </li>
            <li onClick={ ()=>setMenuOpen(!menuOpen) } >
                <a href="#works">About</a>
            </li>
            <li onClick={ ()=>setMenuOpen(!menuOpen) } >
                <a href="#testimonials">Video</a>
            </li>
            <li onClick={ ()=>setMenuOpen(!menuOpen) } >
                <a href="#contact">Gallery</a>
            </li>
            <li onClick={ ()=>setMenuOpen(!menuOpen) } >
                <a href="#contact">Related</a>
            </li>
        </ul>
    </div>
  )
}