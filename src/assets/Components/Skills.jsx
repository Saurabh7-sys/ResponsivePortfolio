import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Skills = () => {
    useEffect(() => {
        Aos.init({duration:1000});
    },[])
  return (
    <>
    <div className="heading w-full flex justify-around items-center mt-20 text-4xl md:text-5xl " data-aos = "zoom-in">
        <h1 className="font-bold">My Skills</h1>
    </div>
    <section  className="w-full flex justify-around items-center mt-44 p-3 md:mt-48"  data-aos = "zoom-in">
        
        <div className="html flex flex-col items-center gap-4" >
            <img className="w-16 h-16   md:w-24 md:h-24" src="public\images\html.png" alt="html" />
            <h3 className="md:text-2xl">HTML</h3>
        </div>
        <div className="css flex flex-col items-center gap-4">
            <img className="w-16 h-16  md:w-24 md:h-24" src="\images\css.png" alt="css" />
            <h3 className="md:text-2xl">CSS</h3>
        </div>
        <div className="js flex flex-col items-center gap-4">
            <img className="w-20 h-20 md:w-32 md:h-32" src="\images\javascript-1.svg" alt="js" />
            <h3 className="md:text-2xl">JavaScript</h3>
        </div>
        <div className="react flex flex-col items-center gap-4">
            <img className="w-16 h-16 md:w-24 md:h-24" src="\images\react.png" alt="react" />
            <h3 className="md:text-2xl">REACT</h3>
        </div>
        <div className="tailwind flex flex-col items-center gap-4">
            <img className="w-16 h-16  md:w-24 md:h-24" src="\images\tailwind.png" alt="tailwind" />
            <h3 className="md:text-2xl">TAILWIND</h3>
        </div>
    </section>
    </>
  )
}

export default Skills