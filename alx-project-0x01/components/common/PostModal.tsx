import { PostData, PostModalProps } from "@/interfaces";
import { ChangeEvent, FormEvent, useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<PostData>({
    userId: 1,
    title: "",
    body: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit(post);
    onClose();
  };

  return (
    <div>
      <div>
        <h2>Add New Post</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="userId"
              className="block text-gray-700 font-medium mb-2"
            >
              User Id
            </label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={post.userId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              placeholder="Enter post title"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="body"
              className="block text-gray-700 font-medium mb-2"
            >
              Body
            </label>

            <textarea
              id="body"
              name="body"
              value={post.body}
              rows={4}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post content"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={onClose}
            >
              Close
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
