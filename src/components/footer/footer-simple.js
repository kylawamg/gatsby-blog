import React from "react";
import { Link } from "gatsby";

import Logo from "../logo";
import { navigateWithScroll } from "../utils";

const FooterSimple = () => {
  return (
    <footer className="static bottom-0 custom-bg">
      <section className="container mx-auto w-full  lg:px-32 px-6">
        <nav className="flex justify-between items-center flex-wrap py-6 ">
          <Logo />
          <div className="mb-1 font-secondary w-full block flex-grow md:flex md:flex-row-reverse md:items-center md:self-end md:w-auto">
            <div className="text-title_gray-primary text-base md:divide-x">
              <Link
                to={`/blog`}
                href="#responsive-header"
                className="text-center mt-4 md:mt-0 hover:underline active:underline block md:inline-block lg:mt-0 pl-2 pr-2"
              >
                Blog
              </Link>
              <a href={`/#training-section`}
                onClick={navigateWithScroll.bind(this, 'training-section')}
                className="text-center mt-4 md:mt-0 hover:underline active:underline block md:inline-block lg:mt-0 pl-2 pr-2"
                ariaLabel={`Scroll to training section`}>
                {`Cursos`}
              </a>
              <a href={`/#about`}
                onClick={navigateWithScroll.bind(this, 'about')}
                className="text-center mt-4 md:mt-0 hover:underline active:underline block md:inline-block lg:mt-0 pl-2 pr-2"
                ariaLabel={`Scroll to about section`}>
                {`Quiénes somos`}
              </a>
              <a href="mailto:admin@devspain.es"
                className="text-center mt-4 md:mt-0 hover:underline active:underline block md:inline-block lg:mt-0 pl-2 pr-2">
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
