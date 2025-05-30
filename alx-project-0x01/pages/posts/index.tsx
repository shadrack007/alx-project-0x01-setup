import { useState } from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostData, PostPageProps, PostProps } from "@/interfaces";
import PostModal from "@/components/common/PostModal";

const Post: React.FC<PostPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [post, setPost] = useState<PostData | null>(null);

  const handleAddPost = (newPost: PostData) => {
    setPost({ ...newPost, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full hover:bg-white cursor-pointer hover:text-blue-700 text-white"
          >
            Add Post
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {posts.map(({ title, body, userId, id }: PostProps, key: number) => (
            <PostCard
              id={id}
              userId={userId}
              body={body}
              title={title}
              key={key}
            />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white w-1/2 p-8 rounded-3xl">
            <PostModal
              onClose={() => setModalOpen(false)}
              onSubmit={handleAddPost}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Post;
