import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link, navigate } from "gatsby";

import Logo from "../logo";
import { navigateWithScroll } from "../utils";

const MainHeader = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className="container mx-auto">
      <nav className="border-b border-line_gray flex justify-between flex-wrap py-6 lg:px-32">
        <Logo />
        <div className="block lg:hidden">
          <HiMenuAlt4
            onClick={() => toggleExpansion(!isExpanded)}
            style={{ fill: "white" }}
            size={26}
            className="text-white self-center"
          ></HiMenuAlt4>
        </div>
        <div
          className={`${isExpanded ? `block` : `hidden`
            } w-full block flex-grow lg:flex lg:flex-row-reverse lg:items-center lg:self-end lg:w-auto`}
        >
          <div className="text-title_gray-primary font-semibold">
            <Link
              to={`/blog`}
              href="#responsive-header"
              className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Blog
            </Link>
            <a href={`/#training-section`}
              onClick={navigateWithScroll.bind(this, 'training-section')}
              className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 mr-4"
              ariaLabel={`Scroll to training section`}>
              {`Cursos`}
            </a>
            <a href={`/#about`}
              onClick={navigateWithScroll.bind(this, 'about')}
              className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 mr-4"
              ariaLabel={`Scroll to about section`}>
              {`Quiénes somos`}
            </a>
            <a href="mailto:admin@devspain.es"
              className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 mr-4">
              {`Contacto`}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;
