import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
const PhotosDownload = '/photosPackage/photos.zip'


export function AsiderMenu () {
    const [isOpen, SetIsOpen ] = useState(false)
  return (
    <header id="hero_menu" className="w-full h-full fixed top-0 z-[5]">
        <div className="w-full h-screen flex justify-end transition-all">
            {isOpen === true ? (
                <section className="w-[70%] h-full relative z-[40] transition-all sm:w-[50%] md:w-[35%] xl:w-[30%]">
                    <div className="w-full h-full top-0 left-0 absolute bg-[#0a0a0a] dark:bg-[#EFEDB9]">
                        <IoIosClose data-testid="close-icon" className="w-12 h-[6%] text-[#EFEDB9] dark:text-[#0a0a0a] cursor-pointer" onClick={() => SetIsOpen(!isOpen)} />
                        <div className="flex flex-col justify-center items-center gap-6 md:gap-8 px-8 pt-10 text-[#EFEDB9] dark:text-[#0a0a0a]">
                            <h2 className="text-2xl font-medium pb-6 md:pb-4">Sobre</h2>
                            <h4 className="text-xl font-medium md:text-2xl">Pedro Isidoro</h4>
                            <div className="flex justify-center items-center gap-10">
                                <p className="border-b-2  border-b-[#EFEDB9] dark:border-b-[#0a0a0a]">21 anos</p>
                                <p className="border-b-2 border-b-[#EFEDB9] dark:border-b-[#0a0a0a] border-t-none">Brasil - São Paulo</p>
                            </div>
                            <p className="border-b-2 border-b-[#EFEDB9] dark:border-b-[#0a0a0a] text-justify md:text-lg">
                                Sou apenas um estudante de TI, metido a masterchef amador, amante de livros e da 7° arte e música, além de ser um gato de academia.
                            </p>
                        </div>
                        <div id="about" className="flex flex-col justify-center items-center gap-6 px-8 pt-10 text-[#EFEDB9] dark:text-[#0a0a0a]">
                            <h2 className="text-2xl font-medium  pb-6">Contato</h2>
                            <div className="flex gap-14">
                                <div className="flex flex-col items-center">
                                    <a href="https://www.instagram.com/pedrol.isidoro/" target="_blank" className="pb-3">
                                        <FaInstagram className="w-12 h-10 text-justify hover:text-[#df45ac]"/>
                                    </a>
                                    <p className="text-[#df45ac]">Pessoal</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <a href="https://www.instagram.com/pedro.lisidoro/" target="_blank" className="pb-3">
                                        <FaInstagram className="w-12 h-10 text-justify hover:text-[#ac6ff1]"/>
                                    </a>
                                    <p className="text-[#ac6ff1]">Hobbies</p>
                                </div>
                            </div>
                            <button className="bg-[#EFEDB9] dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-[#EFEDB9] rounded-xl px-3 py-2 hover:bg-gradient-to-r from-[#c5499c] from-0% to-[#ac6ff1] to-100% hover:opacity-95 hover:text-[#0a0a0a]"><a href={PhotosDownload} download="photos.zip">Download das Fotos</a></button>
                            <button className="text-[#EFEDB9] dark:text-[#0a0a0a] rounded-xl px-3 py-2 cursor-text select-text">pedro.isidoro26@yahoo.com.br</button>
                        </div>
                    </div>
                </section>
            ): (
                <IoMenuOutline data-testid="menu-icon" className="w-12 h-[6%] text-[#0a0a0a] dark:text-[#EFEDB9] cursor-pointer pr-2" onClick={() => {SetIsOpen(!isOpen)}} />
            )}
        </div>
    </header>
  )
}