import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Post } from '../types/Post';

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data.posts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div>
      {posts.map(post => (
        <Link href={`/posts/${post.id}`}>
          <div
            key={post.id}
            className="mb-4 p-4 bg-cover bg-center text-white rounded-lg shadow-md opacity-80 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50"
            style={{
              backgroundImage: `url(/blogImages/${post.id}.jpg)`,
            }}
          >
            <span className="text-xl font-bold">{post.titulo}</span>
            <p>{new Date(post.fechaPublicacion).toLocaleDateString('es-ES')}</p>
            <p>Autor: {post.autor}</p>
            {post.categoria && <p>Categoría: {post.categoria}</p>}
            {post.etiquetas.length > 0 && (
              <p>Etiquetas: {post.etiquetas.join(', ')}</p>
            )}
            <p>Vistas: {post.vistas}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
