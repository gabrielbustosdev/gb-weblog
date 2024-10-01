import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

export async function GET() {
    const prisma = new PrismaClient();

    try {
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                titulo: true,
                fechaPublicacion: true,
                autor: true,
                categoria: true,
                etiquetas: true,
                vistas: true,
                activo: true,
                imagenUrl: true,
                createdAt: true,
                updatedAt: true
            }
        });
        return NextResponse.json({ posts });
    } catch (error) {
        console.error('Error al obtener los posts:', error);
        return NextResponse.json({ error: 'Hubo un error al obtener los posts' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}