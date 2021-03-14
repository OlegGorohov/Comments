import React, { useEffect, useState } from "react";
import { Comment } from "components/Comment/Comment";
import { commentsControl } from "service";
import { CommentDTO } from "dtos/CommentsDTO";
import "./CommentList.css";

export const CommentsList: React.FC = () => {
  const [commentsList, setCommentsList] = useState<CommentDTO[] | null>(null);

  useEffect(() => {
    commentsControl.getCommentsList().then((result) => {
      setCommentsList(result);
    });
  }, []);

  return (
    <div className='comments'>
      <h1 className='comments__title'>Comments</h1>
      {commentsList &&
        commentsList.length > 0 &&
        commentsList.map((comment: CommentDTO, index: number) => {
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
  );
};
