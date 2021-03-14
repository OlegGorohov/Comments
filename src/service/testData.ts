import { CommentDTO } from "dtos/CommentDTO";

export const testData: CommentDTO[] = [
  {
    author: "Nikolay",
    message: "Hi",
    comments: [
      {
        author: "Olga",
        message: "Hi there",
        comments: [],
      },
      {
        author: "Nikolay",
        message: "What's up?!",
        comments: [
          {
            author: "Olga",
            message: "How are u?",
            comments: [],
          },
        ],
      },
    ],
  },
  {
    author: "Alex",
    message: "Hey folks!",
    comments: [],
  },
];
