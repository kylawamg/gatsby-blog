import React from "react";
import { Link } from "gatsby";

import Logo from "../logo";
import { navigateWithScroll } from "../utils";

const FooterSimple = () => {
  return (
    <footer className="static bottom-0 custom-bg h-20">
      <section className="container mx-auto w-full  lg:px-32 px-6">
        <nav className="flex justify-between flex-wrap py-6 ">
          <Logo />

          <div className="w-full block flex-grow lg:flex lg:flex-row-reverse lg:items-center lg:self-end lg:w-auto">
            <div className="text-title_gray-primary text-base divide-x">
              <p className="block mt-4 lg:inline-block lg:mt-0  pr-2">
                @devSpain
              </p>
              <Link
                to={`/blog`}
                href="#responsive-header"
                className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 pl-2 pr-2"
              >
                Blog
              </Link>
              <a href={`/#training-section`}
                onClick={navigateWithScroll.bind(this, 'training-section')}
                className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 pl-2 pr-2"
                ariaLabel={`Scroll to training section`}>
                {`Cursos`}
              </a>
              <a href={`/#about`}
                onClick={navigateWithScroll.bind(this, 'about')}
                className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 pl-2 pr-2"
                ariaLabel={`Scroll to about section`}>
                {`Quiénes somos`}
              </a>
              <a href="mailto:admin@devspain.es"
                className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 pl-2 pr-2">
                {`Contacto`}
              </a>
            </div>
          </div>
        </nav>
      </section>
    </footer>
  );
};

export default FooterSimple;
