import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-2xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none mt-4 mb-6 text-center md:text-left">
      {children}
    </h1>
  );
};

export default PostTitle;
