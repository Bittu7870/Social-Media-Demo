import { useContext } from "react";
import Post from "./Post";
import { PostListData } from "../store/Post-List-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  console.log(postList);
  return (
    <div>
    {postList.map((post) => (<Post key={post.id} {...post}/>) )}
    </div>
  );
};

export default PostList;
