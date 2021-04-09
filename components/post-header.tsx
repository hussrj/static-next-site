import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex items-center align-middle">
        <div className="flex-1 hidden md:block md:mb-6">
          <Avatar name={author.name} picture={author.picture} textSizeMin="text-xl" textSizeMax="text-xl" />
        </div>
        <div className="align-middle items-center hidden md:block md:mb-6 text-xl font-bold">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="mb-4 md:mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="flex items-center align-middle max-w-2xl mx-auto">
        <div className="flex-1 block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} textSizeMin="text-xl" textSizeMax="text-xl" />
        </div>
        <div className="font-bold align-middle items-center md:hidden mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
