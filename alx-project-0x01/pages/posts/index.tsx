import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

const Post: React.FC<PostProps[]> = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <Header />

      <main className="p-4">
        <div>
          <h1>Post Content</h1>
          <button>Add Post</button>
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
