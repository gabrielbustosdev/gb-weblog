'use client'
import Post from '@/components/Post'
import { useParams } from 'next/navigation';

const PostPage = () => {

  const params = useParams();
  const id = params.id

  return (
    <div className="container mx-auto px-4 py-32">
      <Post postId={id} />
    </div>
  );
};

export default PostPage;