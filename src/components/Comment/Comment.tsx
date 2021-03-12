import React from "react";
import { CommentDTO } from "dtos/CommentsDTO";

export const Comment: React.FC<CommentDTO> = ({
  author,
  message,
  comments,
}) => {
  return (
    <div>
      <h2>{author}</h2>
      <p>{message}</p>
      {comments?.length > 0 &&
        comments.map((comment: CommentDTO) => (
          <Comment
            author={comment.author}
            message={comment.message}
            comments={comment.comments}
          />
        ))}
    </div>
  );
};
