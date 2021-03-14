import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CommentDTO } from "dtos/CommentDTO";
import { getAuthorsFromResponse } from "utils/main";
import "./Authors.css";
import clsx from "clsx";

interface Props {
  response: CommentDTO[];
  activeAuthor: string;
  setActiveAuthor: Dispatch<SetStateAction<string>>;
}

export const Authors: React.FC<Props> = ({
  response,
  activeAuthor,
  setActiveAuthor,
}) => {
  const [authorsList, setAuthorsList] = useState<string[] | null>(null);

  const handleClick = (author: string) => {
    setActiveAuthor(author);
  };

  useEffect(() => {
    setAuthorsList(getAuthorsFromResponse(response));
  }, [response]);

  return (
    <div className='authors'>
      {authorsList &&
        authorsList.length > 0 &&
        authorsList?.map((author) => {
          return (
            <div
              className={clsx("author", "authors__author", {
                "author--active": author === activeAuthor,
              })}
              onClick={() => handleClick(author)}
              key={author}
            >
              {author}
            </div>
          );
        })}
    </div>
  );
};
