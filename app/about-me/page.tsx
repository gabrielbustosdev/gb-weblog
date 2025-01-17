import TransitionPage from "@/components/TransitionPage";
import Image from "next/image";
import Carrusel from "@/components/Carrusel";

export default function AboutMePage() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <div className="container mx-auto px-4 md:px-16 py-8 mt-24">
          <div className="flex flex-col md:flex-row items-center justify-between">

            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4"><span className="text-secondary">Hola! </span>soy Gabriel Bustos</h1>
              <p className="text-lg md:text-xl mb-4">
                Soy un desarrollador fullStack apasionado por crear experiencias digitales únicas.
              </p>
              <p className="text-base md:text-lg mb-4">
                Con experiencia en el diseño y desarrollo de aplicaciones web, me esfuerzo por combinar funcionalidad y estética para ofrecer experiencias de usuario excepcionales.
              </p>
              <div className="flex justify-center space-x-16">
                <a href="https://wa.me/5493571595365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-white bg-green-500 border-green-500 rounded-xl hover:shadow-xl hover:shadow-green-500/50">
                  <Image src="/icons/whatsapp.svg" width={24} height={24} alt="WhatsApp" className="mr-2" />
                  Contacta conmigo
                </a>
                <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                  Ver proyectos
                </a>
              </div>
              <div className="mt-8">
                <Carrusel />
              </div>
            </div>

            <div className="md:w-1/2 bg-white bg-opacity-10 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Un poco mas sobre mi</h2>
              <ul className="space-y-2">
                <li>🚀 Desarrollador FullStack con 4+ años de experiencia</li>
                <li>💻 Especializado en React, Node.js, TypeScript y mas...</li>
                <li>🎨 Habilidades en diseño UI/UX</li>
                <li>🗄️ Experiencia en bases de datos SQL y NoSQL</li>
                <li>🛠️ Conocimientos en DevOps y CI/CD</li>
                <li>🔌 Aficionado al Internet de las Cosas (IoT)</li>
                <li>🌐 Experiencia en desarrollo de aplicaciones web escalables</li>
                <li>🤝 Colaborador eficaz en equipos multidisciplinarios</li>
                <li>📚 Aprendizaje continuo y actualización en nuevas tecnologías</li>
              </ul>
              <Image src="/perfil.png" alt="Gabriel Bustos" width={150} height={150} className="rounded-full mx-auto items-center py-8" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
