import React, { useEffect, useState } from "react";
import { Comment } from "components/Comment/Comment";
import { commentsControl } from "service";
import { CommentDTO } from "dtos/CommentsDTO";

export const CommentsList: React.FC = () => {
  const [commentsList, setCommentsList] = useState<CommentDTO[] | null>(null);

  useEffect(() => {
    commentsControl.getCommentsList().then((result) => {
      setCommentsList(result);
    });
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      {commentsList &&
        commentsList.length > 0 &&
        commentsList.map((comment: CommentDTO) => (
          <Comment
            author={comment.author}
            message={comment.message}
            comments={comment.comments}
          />
        ))}
    </div>
  );
};
