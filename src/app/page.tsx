import Image from "next/image";
import Profile from "@/public/profile.jpg";

export default function Home() {
  return (
    <section className="home">
       <Image className="home-img" src={Profile} alt="Profile picture" />
      <div className="home-content">
        <h1> Hi, I'm <span>Areeba Shabbir</span></h1>
        <h3> Frontend Developer</h3>
        <p>
         "I am a Frontend Developer with a passion for creating clean, responsive, and user-friendly websites. Using technologies like HTML, CSS, JavaScript, TypeScript, and Next.js, I build dynamic web applications that provide seamless user experiences. My goal is to turn complex ideas into intuitive designs, ensuring performance and accessibility across all devices."
        </p>     
        <div className="button-container">
          <button>Hire Me</button>
          <button>View Projects</button>
         </div>
    
      
        </div>

  
    </section>
  );
}
