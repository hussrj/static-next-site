import { GetServerSideProps, NextPage } from "next";
import { ExternalComponent } from "../src/API";

const SiteComponents: NextPage<{ components: ExternalComponent[] }> = (
  props
) => {
  return (
    <div className="text-center">
      <span className="inline-block text-white text-center text-xs sm:text-sm">
        A statically generated blog using{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="underline hover:border border-blue-900 hover:text-success hover:shadow-sm duration-200 transition-colors"
        >
          Next.js
        </a>
        {" and "}
      </span>

      <div className="block lg:inline-block ml-2 relative">
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 text-white ml-auto hover:text-white text-xs sm:text-sm"
          id="components-menu"
          aria-label="Components menu"
          aria-haspopup="true"
        >
          AWS Services, Languages, and Frameworks!
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          id="components-menu-dropdown"
          className="menu-hidden absolute bottom-10 mt-1 w-full rounded-md shadow-lg items-center"
        >
          <div
            className="py-1 rounded-md bg-white shadow-xs"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="components-menu"
          >
            {props.components?.map((extComp: ExternalComponent | null) => (
                  <div key={extComp ? extComp.id : ''}>
                    <a
                      href={extComp ? extComp.href : ''}
                      target="_blank"
                      className="block px-4 py-2 text-xs sm:text-sm leading-5 hover:underline hover:bg-blue-600 text-gray-700 hover:text-white focus:outline-none transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      {extComp ? extComp.name : ''}
                    </a>
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteComponents;