import { CommentDTO } from "dtos/CommentDTO";

export const getAuthorsFromResponse = (
  response: CommentDTO[],
  authorsSet?: Set<string>
): string[] => {
  const authors = authorsSet ?? new Set();
  response.forEach((comment) => {
    if (comment.author) {
      authors.add(comment.author);
    }
    if (comment?.comments.length > 0) {
      getAuthorsFromResponse(comment.comments, authors);
    }
  });
  return Array.from(authors);
};
