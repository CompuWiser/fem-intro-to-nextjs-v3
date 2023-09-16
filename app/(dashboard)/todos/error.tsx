"use client";

import { FC } from "react";

type ErrorFC = FC<{
  error: Error;
  reset: () => void;
}>;

const TodosPageError: ErrorFC = ({ error }) => {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default TodosPageError;
