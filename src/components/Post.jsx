import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListData } from "../store/Post-List-store";

const Post = ({ ...post }) => {
  const {deletePost} = useContext(PostListData);

  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>

        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick= {()=>deletePost(post.id)}
        >
          <AiFillDelete />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="hashTag badge text-bg-primary">
            {tag}
          </span>
        ))}
        <div className="alert alert-info mt-3" role="alert">
          This post has been reacted by {post.reaction} by people.
        </div>
      </div>
    </div>
  );
};

export default Post;
