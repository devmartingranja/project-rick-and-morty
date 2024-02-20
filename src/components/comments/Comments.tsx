import ItemComment from "./components/ItemComment";
import { IItemComment } from "./components/ItemComment.utils";
import useComments from "./useComments";

interface IProps {
  id: number;
  listComments: IItemComment[];
}

const Comments = ({ id, listComments }: IProps) => {
  const { inputValue, handleInputChange, handlerAddComment } = useComments(id);

  return (
    <section className="rounded-md border p-4">
      <h3 className="text-2xl font-bold mb-4">Comments</h3>
      <article className="flex flex-col mb-10">
        <input
          type="text"
          className="rounded-md border w-full p-3 mb-2"
          onChange={handleInputChange}
          value={inputValue}
        />
        <button
          disabled={!inputValue}
          className={`bg-blue-500 text-white rounded-md p-3 self-end ${
            !inputValue && "bg-gray-300"
          }`}
          onClick={handlerAddComment}
        >
          Add Comment
        </button>
      </article>

      <section>
        {listComments.map(({ dateTime, comment }, i) => (
          <ItemComment key={i} dateTime={dateTime} comment={comment} />
        ))}
      </section>
    </section>
  );
};

export default Comments;
