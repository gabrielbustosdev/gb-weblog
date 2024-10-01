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

            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-16">
              <h1 className="text-4xl font-bold mb-4"><span className="text-secondary">Hola! </span>soy Gabriel Bustos</h1>
              <p className="text-xl mb-4">
                Soy un desarrollador fullStack apasionado por crear experiencias digitales únicas.
              </p>
              <p className="text-lg mb-4">
                Con experiencia en el diseño y desarrollo de aplicaciones web, me esfuerzo por combinar funcionalidad y estética para ofrecer experiencias de usuario excepcionales.
              </p>
              <a href="/contact"
                className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                Contacta conmigo
              </a>
              <Carrusel />
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
