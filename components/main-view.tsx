import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";
import { OWNER_AUTHOR } from "../lib/constants";
import { ExternalComponent } from "src/API";
import React from "react";

type Props = {
  children: React.ReactNode;
  components: ExternalComponent[];
};

const MainView = ({ children, components }: Props) => {
  return (
    <>
      <Meta />
      <div className="flex flex-col min-h-screen justify-between">
        <Header author={OWNER_AUTHOR} />
        <main className="font-montserrat flex-grow">{children}</main>
        <Footer components={components} />
      </div>
    </>
  );
};

export default MainView;
