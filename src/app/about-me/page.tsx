
import Image from "next/image";
import Profile from "@/public/profile.jpg"

export default function About (){
    return(
       <div>
       
        <section className="about">
            <div className="about-img"> </div>
            <Image
            src={Profile}
            alt="about-img"
            />
        
          <div className="about-text">
        <h2>About <span>Me</span></h2>
          <h4>Frontend Developer</h4>
          <p>
          I’m a frontend developer with a strong focus on building responsive and visually appealing web applications. My skill set includes HTML, CSS, TypeScript, and Next.js, enabling me to create smooth, interactive user experiences. I’m passionate about crafting clean, optimized code and bringing designs to life in a way that engages users and enhances functionality. Whether it’s creating modern UIs or ensuring a seamless user journey, I aim to combine aesthetics with performance in every project. My goal is to continuously grow as a developer and contribute to meaningful, impactful web applications.</p>
          
        </div>
        </section>



       </div>
    )
}