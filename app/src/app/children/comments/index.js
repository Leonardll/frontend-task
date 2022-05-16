import Comment from "./children/comment";

const Comments = ({ commentsdetails }) => {
  return commentsdetails.map((item) => {
    const { node } = item;
    return <Comment key={node.id} node={node} />;
  });
};

export default Comments;
