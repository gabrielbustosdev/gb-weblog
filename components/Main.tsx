import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return (
    <div className="z-20 w-full">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <div className="flex justify-center md:justify-end mb-8 md:mb-0 md:pr-20">
                    <Image src="/gabi-anime.svg" priority width="400" height="400" alt="Avatar" />
                </div>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-lg md:mx-0 md:mb-8">
                        Bienvenid@s a mi web personal, un portafolio donde comparto mis trabajos 
                        y avances de mi carrera profesional. Desde mi primer contacto con las computadoras quedé fasinado 
                        y desperto una inmensa curiosidad por su funcionamiento, apenas pude hice un curso de Tecnico de hardware de pc y redes informaticas 
                        lo que amplió mi conocimento y me impulso a seguir aprendiendo mas, luego aprendí a programar mediante cursos y la carrera que actualmente curso 
                        de Ciencias de la computación, llevo programando mas de 4 años y hoy en día me estoy formando en el analisis de datos.
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Main;
