import { commentData } from "../Constant/CommentsData";
import CommentList from "./Comment";


export const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};
