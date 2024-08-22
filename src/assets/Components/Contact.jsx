import Button from "./button"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const name = event.target.name.value;
    const email = event.target.email.value;

    if (!name || !email) {
      alert("Please fill out both the name and email fields.");
    
      return ;
    }

    alert("Thanks! I will reach out to you as soon as possible");
      
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center " data-aos="zoom-in">
        <h1 className="text-4xl mt-5 font-bold md:text-5xl">Contact Me</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10 px-9 py-5 rounded-lg bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(69,58,58,0.37)] md:h-[450px] md:w-[700px] md:flex md:flex-col md:justify-center md:items-center md:gap-10">
          <div className="name flex gap-5 md:flex md:gap-10 mt-7">
            <label htmlFor="name" className="text-blue-300 md:text-2xl">Name:</label>
            <input
              id="name"
              name="name"
              className="rounded-full h-8 w-64 placeholder:text-gray-400 placeholder:text-sm bg-transparent border border-white placeholder:p-4 px-2 box-border md:h-10 md:w-80 md:placeholder:text-base md:placeholder:p-2 md:px-5 md:box-border"
              type="text"
              placeholder="Enter your name here..."
              required
            />
          </div>
          <div className="email flex gap-5 md:flex md:gap-10">
            <label htmlFor="email" className="text-blue-300 md:text-2xl">Email:</label>
            <input
              id="email"
              name="email"
              className="rounded-full h-8 w-64 placeholder:text-gray-400 placeholder:text-sm bg-transparent border border-white placeholder:p-4 px-2 box-border md:h-10 md:w-80 md:placeholder:text-base md:placeholder:p-2 md:px-5 md:box-border"
              type="email"
              placeholder="Enter your email here..."
              required
            />
          </div>
          <div className="message flex md:flex md:gap-4">
            <label htmlFor="message" className="text-blue-300 md:text-2xl">Message:</label>
            <textarea
              id="message"
              name="message"
              className="rounded-xl h-28 w-64 placeholder:text-gray-400 placeholder:text-sm bg-transparent border border-white placeholder:p-4 px-4 box-border md:h-40 md:w-80 md:placeholder:text-base md:placeholder:p-2 md:px-5 md:box-border"
              placeholder="Enter your message here..."
            ></textarea>
          </div>
          <Button className={`md:px-44 md:mb-5 `} type="submit">Contact Me</Button>
        </form>
      </section>
    </>
  )
}

export default Contact
