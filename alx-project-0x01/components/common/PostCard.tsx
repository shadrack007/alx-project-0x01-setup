import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ id, userId, title, body }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>

      <p>{body}</p>

      <div>
        <span>User ID: {userId}</span>
        <span>Post ID: {id}</span>
      </div>
    </div>
  );
};

export default PostCard;
