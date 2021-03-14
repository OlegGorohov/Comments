import React, { useEffect, useState } from "react";
import { CommentDTO } from "dtos/CommentDTO";
import { getAuthorsFromResponse } from "utils/main";

export const AuthorsList: React.FC<{ response: CommentDTO[] }> = ({
  response,
}) => {
  const [authorsList, setAuthorsList] = useState<string[] | null>(null);

  const handleClick = () => {
    console.log("author click");
  };

  useEffect(() => {
    setAuthorsList(getAuthorsFromResponse(response));
  }, []);

  return (
    <div className='authors'>
      {authorsList && authorsList.length > 0 && (
        <ul>
          {authorsList?.map((author) => {
            return (
              <li onClick={handleClick} key={author}>
                {author}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
