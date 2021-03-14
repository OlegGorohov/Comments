import React from "react";
import clsx from "clsx";
import { CommentDTO } from "dtos/CommentDTO";
import "./Comment.css";

interface Props {
  response: CommentDTO;
  activeAuthor: string;
}

export const Comment: React.FC<Props> = ({ response, activeAuthor }) => {
  const { author, message, comments } = response;

  return (
    <div className='comment'>
      <div
        className={clsx("comment__author", {
          "comment__author--active": author === activeAuthor,
        })}
      >
        {author}
      </div>
      <p>{message}</p>
      {comments?.length > 0 &&
        comments.map((comment: CommentDTO, index: number) => (
          <Comment
            activeAuthor={activeAuthor}
            response={comment}
            key={`${author}-${index}`}
          />
        ))}
    </div>
  );
};
