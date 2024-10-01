'use client'

import React, { useEffect, useState } from 'react';
import { Post as PostType } from '../types/Post';


interface PostProps {
    postId: string | string[] | undefined;
}

const Post: React.FC<PostProps> = ({ postId }) => {
    const [post, setPost] = useState<PostType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (postId) {
                try {
                    const response = await fetch(`/api/post?id=${postId}`);
                    if (!response.ok) {
                        throw new Error('No se pudo cargar el post');
                    }
                    const data = await response.json();
                    setPost(data.post);
                } catch (error) {
                    console.error('Error al cargar el post:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchPost();
    }, [postId]);

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
        );
    }

    if (!post) {
        return <div>No se encontró el post</div>;
    }

    const applyCustomStyles = (html: string) => {
        return html
            .replace(/<p>/g, '<p class="mb-4">')
            .replace(/<h1>/g, '<h1 class="text-2xl font-bold mb-6">')
            .replace(/<h2>/g, '<h2 class="text-xl font-semibold mb-6">')
            .replace(/<ul>/g, '<ul class="list-disc pl-4 mb-4">')
            .replace(/<ol>/g, '<ol class="list-decimal pl-4 mb-4">')
            .replace(/<li>/g, '<li class="mb-2">')
            .replace(/<a>/g, '<a class="text-blue-500 hover:text-blue-600">')
            .replace(/<strong>/g, '<strong class="font-bold">')
            .replace(/<em>/g, '<em class="italic">')
            .replace(/<code>/g, '<code class="bg-gray-100 p-1 rounded-md">')
            .replace(/<pre>/g, '<pre class="bg-gray-100 p-2 rounded-md overflow-x-auto">')
            .replace(/<blockquote>/g, '<blockquote class="bg-gray-100 p-2 rounded-md mb-4">')
    };

    return (
        <div className="mx-auto">
            <div className="flex flex-col items-center">
                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                    <img src={post.imagenUrl} alt={post.titulo} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-3xl font-bold text-white text-center">{post.titulo}</h1>
                    </div>
                </div>
            </div>
            <p className="text-gray-600 mb-2">Autor: {post.autor}</p>
            <p className="text-gray-600 mb-4">Fecha: {new Date(post.fechaPublicacion).toLocaleDateString('es-ES')}</p>
            {post.categoria && <p className="text-gray-600 mb-2">Categoría: {post.categoria}</p>}
            <p className="text-gray-600 mb-2">Vistas: {post.vistas}</p>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: applyCustomStyles(post.contenido) }}></div>

        </div>
    );
};

export default Post;
