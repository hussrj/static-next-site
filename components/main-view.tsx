import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";
import { OWNER_AUTHOR } from "../lib/constants";

type Props = {
  children: React.ReactNode;
};

const MainView = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="flex flex-col min-h-screen justify-between">
        <Header author={OWNER_AUTHOR} />
        <main className="font-montserrat flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainView;