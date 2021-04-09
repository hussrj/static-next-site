import Link from "next/link";
import { withRouter, NextRouter } from "next/router";
import React, { ReactElement } from "react";

interface WithRouterProps {
  router: NextRouter;
}

interface MyComponentProps extends WithRouterProps {
  key: string;
  path: string;
  icon: ReactElement;
  label: string;
}

class NavigationButton extends React.Component<MyComponentProps> {
  render() {
    return (
      <Link href={this.props.path} passHref={true}>
        <div
          role="menuitem"
          className={`${
            this.props.router.pathname === this.props.path
              ? "bg-blue-600 border"
              : ""
          } w-full justify-end items-end cursor-pointer flex md:inline-flex md:w-auto pr-0 px-2 py-3 rounded text-white hover:bg-blue-600`}
        >
          <div className="text-md lg:text-lg h-full">{this.props.icon}</div>
          <span className="text-md lg:text-lg px-2">{this.props.label}</span>
        </div>
      </Link>
    );
  }
}

export default withRouter(NavigationButton);
