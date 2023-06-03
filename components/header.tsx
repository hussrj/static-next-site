import Link from "next/link";
import Container from "./container";
import NavigationBar from "./navigation-bar";
import navButtons from "../lib/navigation-buttons";
import Avatar from "./avatar";
import Author from "../types/author";

type Props = {
  author: Author;
};

const Header = ({ author }: Props) => {
  return (
    <div className="shadow-sm border-b border-blue-900 w-full bg-gradient-to-br from-blue-700 to-cyan-500 font-techMono text-white uppercase tracking-tight leading-tight text-lg lg:text-2xl lg:tracking-tighter">
      <Container>
        <div className="align-middle flex justify-between h-auto w-full">
          <div className="flex-1 justify-start">
            <Link href="/" className="flex items-center hover:underline my-1">

              <div className="flex-shrink-0">
                <Avatar
                  name={author.name}
                  picture={author.picture}
                  textSizeMin="text-lg"
                  textSizeMax="text-2xl"
                />
              </div>
              <div className="flex-shrink-0">
                <span>'s Website</span>
              </div>

            </Link>
          </div>
          <div className="inline-flex items-center">
            <NavigationBar navButtons={navButtons} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
