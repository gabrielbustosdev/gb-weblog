export interface Post {
    id: number;
    titulo: string;
    contenido: string;
    fechaPublicacion: string;
    autor: string;
    categoria?: string;
    etiquetas: string[];
    vistas: number;
    activo: boolean;
    imagenUrl?: string;
    createdAt: string;
    updatedAt: string;
  }