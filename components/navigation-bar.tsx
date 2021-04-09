import Link from "next/link";
import { withRouter, NextRouter } from "next/router";
import React, { ReactElement } from "react";
import NavigationButton from "./navigation-button";
import Intro from "./site-components";
import Container from "./container";

interface WithRouterProps {
  router: NextRouter;
}

interface MyComponentProps extends WithRouterProps {
  navButtons: { label: string; path: string; icon: ReactElement }[];
}

class NavigationBar extends React.Component<MyComponentProps> {
  state = {
    active: false,
  };

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <nav className="">
        <div className="inline-flex mb-10 md:mb-0">
        <button
          className="block absolute right-5 top-3 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-auto hover:bg-blue-600 md:hidden text-white hover:text-white"
          onClick={this.handleClick}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        </div>
        <div
          className={`${
            this.state.active ? "" : "hidden"
          } md:inline-flex md:flex-grow md:w-auto bg-transparent`}
        >
          <div
            className="rounded w-full mx-2 block md:relative text-sm md:flex-row md:ml-auto md:w-auto md:items-center justify-end items-end md:h-auto"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="nav-menu"
          >
            {this.props.navButtons.map((button) => (
              <NavigationButton
                key={button.path}
                path={button.path}
                label={button.label}
                icon={button.icon}
              />
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavigationBar);
