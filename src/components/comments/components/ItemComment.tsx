import { IItemComment } from "./ItemComment.utils";

const ItemComment = ({ dateTime, comment }: IItemComment) => {
  return (
    <article className="border-b-2 my-5 pb-4 flex flex-col">
      <h4 className="self-end mb-2 text-base font-bold italic">{dateTime}</h4>
      <p className="text-base text-gray-400">{comment}</p>
    </article>
  );
};

export default ItemComment;
