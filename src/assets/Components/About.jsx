import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
const About = () => {
    useEffect(() => {
        Aos.init({duration:1000});
    },[])
  return (
    <>
    <section className="md:flex md:flex-col md:justify-center md:items-center md:w-full md:mt-20" data-aos = "zoom-in">
        <div className="flex flex-col justify-center items-center     md:flex md:items-center " data-aos = "zoom-in" >
        <h1 className="text-4xl   md:text-5xl  font-bold" >About me</h1>
        <img className="w-28" src="\images\gg_arrow-left.png" alt="arrow" />
        </div>
        <div className="flex flex-col justify-center items-center            md:flex md:flex-row md:items-center md:gap-6 md:w-[1200px] md:relative md:bottom-14">
            <img  className="w-60 p-4  md:min-w-[450px]" src="public\images\laptop.png" alt="laptop"  data-aos = "zoom-in"  />
            <p className="p-4" data-aos = "zoom-in"><span  data-aos = "zoom-in" className='text-transparent bg-clip-text bg-gradient-to-r from from-white via-yellow-300 to-blue-300' >Hi, I'm Saurabh Shelar, a frontend developer who is continually building skills in creating intuitive and visually appealing digital solutions. With a solid understanding of React, HTML, CSS, JavaScript, and Tailwind CSS, I focus on building responsive user interfaces that are both elegant and functional. My attention to detail and commitment to learning new trends ensure that every project I work on is well-crafted and optimized. I'm also comfortable using GitHub, which helps me manage version control and collaborate effectively.</span></p>
        </div>

    </section>
    </>
  )
}

export default About