import React, { useEffect, useState } from "react";
import { Comment } from "components/Comment/Comment";
import { commentsControl } from "service";
import { CommentDTO } from "dtos/CommentDTO";
import { Authors } from "components/Authors/Authors";
import "./Comments.css";

export const Comments: React.FC = () => {
  const [commentsList, setCommentsList] = useState<CommentDTO[] | null>(null);
  const [activeAuthor, setActiveAuthor] = useState<string>("");

  useEffect(() => {
    commentsControl.getCommentsList().then((result) => {
      setCommentsList(result);
    });
  }, []);

  if (commentsList && commentsList.length > 0) {
    return (
      <div className='comments'>
        <div className='comments__authors'>
          <div className='comments__title'>Authors</div>
          <Authors
            response={commentsList}
            activeAuthor={activeAuthor}
            setActiveAuthor={setActiveAuthor}
          />
        </div>
        <div className='comments__list'>
          <div className='comments__title'>Comments</div>
          {commentsList.map((comment: CommentDTO, index: number) => {
            const { author } = comment;

            return (
              <Comment
                response={comment}
                activeAuthor={activeAuthor}
                key={`${author}-${index}`}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};
