import Link from "next/link";

export default function Header(){
    return(
        <div className="header">
     <a href="#" className="logo">Areeba..</a>     
            <ul className="header-buttons">
            
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-me">About me</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
          
        </li>
        <li>
          <Link href="/contact">Contact</Link>
          
        </li>
      </ul>
        </div>
    )
}