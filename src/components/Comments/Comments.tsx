import React, { useEffect, useState } from "react";
import { Comment } from "components/Comment/Comment";
import { commentsControl } from "service";
import { CommentDTO } from "dtos/CommentDTO";
import { AuthorsList } from "components/AuthorsList/AuthorsList";
import "./Comments.css";

export const Comments: React.FC = () => {
  const [commentsList, setCommentsList] = useState<CommentDTO[] | null>(null);

  useEffect(() => {
    commentsControl.getCommentsList().then((result) => {
      setCommentsList(result);
    });
  }, []);

  if (commentsList && commentsList.length > 0) {
    return (
      <div className='comments'>
        <div className='comments__list'>
          <h1 className='comments__title'>Comments</h1>
          {commentsList.map((comment: CommentDTO, index: number) => {
            const { author, message, comments } = comment;
            return (
              <Comment
                author={author}
                message={message}
                comments={comments}
                key={`${author}-${index}`}
              />
            );
          })}
        </div>
        <div className='comments__authors'>
          <h1 className='comments__title'>Authors</h1>
          <AuthorsList response={commentsList} />
        </div>
      </div>
    );
  }

  return null;
};
