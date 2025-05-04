import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 bg-header w-full z-10">
            <div className="container flex flex-col md:flex-row gap-1 md:gap-0 md:justify-between text-center px-5 mx-auto py-2.5 items-center">
                <p className="flex items-center gap-2 text-amber-200"><FaCopyright className="text-2xl" /> {new Date().getFullYear()} Created by Gabriele Prestano</p>

                <div className="flex items-center text-cyan-600 gap-2.5">
                    <p>Follow me on</p>
                    <div className="flex items-center text-2xl gap-2.5 cursor-pointer">
                        <FaGithub className="hover:text-cyan-700 hover:transform hover:-translate-y-1.5 transition-transform duration-300" />
                        <FaLinkedin className="hover:text-cyan-700 hover:transform hover:-translate-y-1.5 transition-transform duration-300" />
                    </div>
                </div>
            </div >
        </footer >
    )
}

export default Footer