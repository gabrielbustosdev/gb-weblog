import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

export async function GET(request: Request) {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Se requiere un ID de post' }, { status: 400 });
    }

    try {
        const post = await prisma.post.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (!post) {
            return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
        }

        return NextResponse.json({ post });
    } catch (error) {
        console.error('Error al obtener el post:', error);
        return NextResponse.json({ error: 'Hubo un error al obtener el post' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
