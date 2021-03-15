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
    <article className='comment'>
      <div
        className={clsx("comment__author", {
          "comment__author--active": author === activeAuthor,
        })}
      >
        {author}
      </div>
      <div
        className={clsx("comment__text", {
          "comment__text--active": author === activeAuthor,
        })}
      >
        <p>{message}</p>
      </div>
      {comments.length > 0 &&
        comments.map((comment: CommentDTO, index: number) => (
          <Comment
            activeAuthor={activeAuthor}
            response={comment}
            key={`${author}-${index}`}
          />
        ))}
    </article>
  );
};
