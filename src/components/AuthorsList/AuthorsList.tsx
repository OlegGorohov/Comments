import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CommentDTO } from "dtos/CommentDTO";
import { getAuthorsFromResponse } from "utils/main";

interface Props {
  response: CommentDTO[];
  setActiveAuthor: Dispatch<SetStateAction<string>>;
}

export const AuthorsList: React.FC<Props> = ({ response, setActiveAuthor }) => {
  const [authorsList, setAuthorsList] = useState<string[] | null>(null);

  const handleClick = (author: string) => {
    setActiveAuthor(author);
  };

  useEffect(() => {
    setAuthorsList(getAuthorsFromResponse(response));
  }, [response]);

  return (
    <div className='authors'>
      {authorsList && authorsList.length > 0 && (
        <ul>
          {authorsList?.map((author) => {
            return (
              <li onClick={() => handleClick(author)} key={author}>
                {author}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
