import cn from "classnames";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small rounded-lg", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0 rounded">
      {slug ? (
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="rounded"
          aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
