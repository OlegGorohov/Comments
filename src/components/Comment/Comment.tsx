import React from "react";
import { CommentDTO } from "dtos/CommentsDTO";
import "./Comment.css";

export const Comment: React.FC<CommentDTO> = ({
  author,
  message,
  comments,
}) => {
  return (
    <div className='comment'>
      <div className='comment__author'>{author}</div>
      <p>{message}</p>
      {comments?.length > 0 &&
        comments.map((comment: CommentDTO, index: number) => (
          <Comment {...comment} key={`${author}-${index}`} />
        ))}
    </div>
  );
};
