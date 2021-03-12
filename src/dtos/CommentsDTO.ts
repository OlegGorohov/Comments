export interface CommentDTO {
  author: string;
  message: string;
  comments: CommentDTO[] | [];
}
