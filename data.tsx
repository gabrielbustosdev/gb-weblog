import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Instagram, Github, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/gabrielbustosarg/",
    },
    {
        id: 2,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/gabrielbustos404/",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/gabrielbustosweb",
    }
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/posts",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/projects",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "TechSolutions",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Nov 2023 ",
    },
    {
        id: 2,
        title: "Creador de Experiencias Digitales",
        subtitle: "PixelCrafters",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "May 2021",
    },
    {
        id: 3,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "CodeForge Solutions",
        description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
        date: "Ago 2019",
    },
    {
        id: 4,
        title: "Prácticas Grado",
        subtitle: "WebWizards Inc.",
        description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
        date: "Mar 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];

export const dataSkills = [
    {
        id: 1,
        title: "React",
        description: "React es una biblioteca de JavaScript para construir interfaces de usuario. Es utilizada para crear aplicaciones web interactivas y dinámicas.",
        imageUrl: "/icons/react.svg",
    },
    {
        id: 2,
        title: "Node.js",
        description: "Node.js es un entorno de ejecución de JavaScript que permite ejecutar código JavaScript en el servidor. Es utilizado para crear aplicaciones web dinámicas y escalables.",
        imageUrl: "/icons/nodejs.svg",
    },
    {
        id: 3,
        title: "TypeScript",
        description: "TypeScript es un lenguaje de programación tipado estáticamente que se ejecuta en el navegador y en el servidor. Es utilizado para crear aplicaciones web modernas y seguras.",
        imageUrl: "/icons/typescript.svg",
    },
    {
        id: 4,
        title: "JavaScript",
        description: "JavaScript es un lenguaje de programación utilizado para crear aplicaciones web interactivas y dinámicas. Es utilizado para crear aplicaciones web modernas y seguras.",
        imageUrl: "/icons/javascript.svg",
    },  
    {
        id: 5,
        title: "HTML5",
        description: "HTML5 es un lenguaje de marcado utilizado para crear aplicaciones web interactivas y dinámicas. Es utilizado para crear aplicaciones web modernas y seguras.",
        imageUrl: "/icons/html5.svg",
    },
    {
        id: 6,  
        title: "CSS3",
        description: "CSS3 es un lenguaje de estilos utilizado para crear aplicaciones web interactivas y dinámicas. Es utilizado para crear aplicaciones web modernas y seguras.",
        imageUrl: "/icons/css3.svg",
    },
    {
        id: 7,
        title: "TailwindCSS",
        description: "TailwindCSS es un framework de CSS utilizado para crear aplicaciones web interactivas y dinámicas. Es utilizado para crear aplicaciones web modernas y seguras.",
        imageUrl: "/icons/tailwindcss.svg", 
    },
    {
        id: 8,
        title: "PostgreSQL",
        description: "PostgreSQL es un sistema de gestión de bases de datos relacional utilizado para crear aplicaciones web interactivas y dinámicas. Es utilizado para crear aplicaciones web modernas y seguras.",
        imageUrl: "/icons/postgresql.svg",
    },
    {
        id: 9,  
        title: "MongoDB",
        description: "MongoDB es un sistema de gestión de bases de datos NoSQL utilizado para crear aplicaciones web interactivas y dinámicas. Es utilizado para crear aplicaciones web modernas y seguras.",
        imageUrl: "/icons/mongodb.svg",
    },
    {
        id: 10,
        title: "Docker",
        description: "Docker es una plataforma de contenedores utilizada para crear aplicaciones web interactivas y dinámicas. Es utilizado para crear aplicaciones web modernas y seguras.",
        imageUrl: "/icons/docker.svg",  
    },
    {
        id: 11,
        title: "Kubernetes",
        description: "Kubernetes es una plataforma de contenedores utilizada para crear aplicaciones web interactivas y dinámicas. Es utilizado para crear aplicaciones web modernas y seguras.",
        imageUrl: "/icons/kubernetes.svg",
    },
    {
        id: 12, 
        title: "FastAPI",
        description: "FastAPI es un framework de Python utilizado para crear aplicaciones web interactivas y dinámicas. Es utilizado para crear aplicaciones web modernas y seguras.",
        imageUrl: "/icons/fastapi.svg",
    },
    {
        id: 13,
        title: "Bitbucket",
        description: "Bitbucket es una plataforma de control de versiones utilizada para crear aplicaciones web interactivas y dinámicas. Es utilizado para crear aplicaciones web modernas y seguras.",
        imageUrl: "/icons/bitbucket.svg",
    },
    {
        id: 14,
        title: "Angular",
        description: "Angular es un framework de JavaScript utilizado para crear aplicaciones web interactivas y dinámicas. Es utilizado para crear aplicaciones web modernas y seguras.",
        imageUrl: "/icons/angular.svg",
    },
    {
        id: 16,
        title: "GitHub",
        description: "GitHub es una plataforma de control de versiones utilizada para crear aplicaciones web interactivas y dinámicas. Es utilizado para crear aplicaciones web modernas y seguras.",
        imageUrl: "/icons/github.svg",
    }
];

