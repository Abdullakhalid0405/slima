import UserIcon from "../Items/user-icon.svg";

const CommentList = ({ comments }) => {
  return comments.map((comm, index) => (
    <div key={index}>
      <Comment  data={comm} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comm.replies} />
      </div>
    </div>
  ))
};

export const Comment = ({ data }) => {
  const { name, text, replies } = { ...data };

  return (
    <div className="flex  rounded-lg bg-gray-100 my-2">
      <img src={UserIcon} alt="user-icon" className="h-7 mt-3 " />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CommentList;
