import { createContext, useReducer } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "I am in Delhi",
    body: "Places to go in Delhi with Friends. Qutub Minar, Hauz Khas Village, India Gate, Hauz khas Village, World of Wonders, Ambience Mall, Dilli Haat",
    reaction: "5",
    userId: "user-2",
    tags: ["vacation", "enjoy", "delhi"],
  },
  {
    id: "2",
    title: "Main Pass Ho Gaya",
    body: "Ek jhatke me shala, jhakas ho gaya pappu pass ho gaya, re pappu pass ho gaya pappu pass ho gaya, aur pappu pass ho gaya.",
    reaction: "15",
    userId: "user-5",
    tags: ["Exam", "Congratulation", "Celebrate"],
  },
];

const postListReducer = (currentPostList, action) => {
  let newPostList = [...currentPostList];

  if (action.type === "DELETE") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.post_Id
    );
  } else if (action.type === "ADD") {
    newPostList = [action.payload, ...currentPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, title, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD",
      payload: {
        id: (() => {
          let id = 0;
          return () => id++;
        })(),
        title: title,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (post_Id) => {
    dispatchPostList({
      type: "DELETE",
      payload: {
        post_Id,
      },
    });
  };

  return (
    <PostListData.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListData.Provider>
  );
};
export default PostListProvider;
