import useContextProvider from "@/context/ContextProvider";
import { useState } from "react";

const useComments = (id: number) => {
  const { setListCommentsProvider, listCommentsProvider } =
    useContextProvider();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handlerAddComment = () => {
    setListCommentsProvider([
      ...listCommentsProvider,
      {
        id,
        dateTime: new Date().toLocaleString(),
        comment: inputValue,
      },
    ]);

    setInputValue("");
  };

  return { inputValue, handlerAddComment, handleInputChange };
};

export default useComments;
