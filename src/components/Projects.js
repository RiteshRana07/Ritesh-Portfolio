
import React from "react";
import weather from '../assets/weather.png'
import landingpage from '../assets/landingpage.png'
import temp from '../assets/temp.png'
import calc from '../assets/calc.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Weather Forecast' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={weather} alt="" />
            </a>}
            {title=='Landing Page' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={landingpage} alt="" />
            </a>}
            {title=='Temperature Converter' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={temp} alt="" />
            </a>}
            {title=='Calculator' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={calc} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Landing Page',
        description:'Landing Page creates a visually appealing and engaging user experience, with features such as hero sections, CTAs, and testimonials. The page is optimized for search engines, accessibility, and mobile devices, and may include A/B testing and CRM integration to track leads and conversions..',
        
        image: {landingpage},
        git:'https://github.com/RiteshRana07/OIBSIP_Landing_Page',
        technologies:['HTML' ,'CSS']
    },
    {
        title:'Weather Forecast',
        description:'The weather forecast application works by fetching current weather data and forecasts from a weather API using JavaScript, and then displaying the information in a user-friendly format using HTML and CSS. The application updates dynamically, providing real-time weather information and allowing users to interact with the interface to view different weather conditions and forecasts.',
        image: {weather},
        git:"https://github.com/RiteshRana07/CodeClause_project_name/tree/master/Code_Clause_Task",
        technologies:['HTML' ,'CSS' , 'Javascript']
    },
    {
        title:'Calculator',
        description:'A calculator built using HTML, CSS, and JavaScript works by using JavaScript to capture user input, perform calculations, and update the display screen, while HTML and CSS create the user interface and visual design. JavaScript event listeners trigger calculations, handle errors, making the calculator functional and interactive.',
        image: {calc},
        git:"https://github.com/RiteshRana07/LGMVIP/tree/master/LGMVIP-WEB-TASK-4-CALCULATOR",
        technologies:['HTML' ,'CSS' , 'Javascript']
    },
    {
        title:'Temperature Converter',
        description:' Implemented user-friendly input forms and interactive features for seamless temperature conversion. Utilized JavaScript logic to handle temperature conversions accurately and efficiently. Created a responsive design to ensure compatibility across different devices and screen sizes.',
        image: {temp},
        git:"https://github.com/RiteshRana07/OIBSIP_temperature_converter",
        technologies:['HTML' ,'CSS' , 'Javascript']
    }
    
]

export default Projects