import React from "react"
import { Link } from "gatsby"
import "../assets/scss/nav.scss"

const Nav = () => {
  return (
    <div>
      <div data-uk-sticky="show-on-up: true">
        <nav className="uk-navbar-container" data-uk-navbar>
          <div className="uk-navbar-left">
            <Link className="uk-navbar-item uk-logo" to="''">
              DevSpain Blog
            </Link>
            <ul className="uk-navbar-nav">
              <li>
                <Link to="/articles">Categoríass</Link>
              </li>
              <li>
                <Link to="/">Quien somos</Link>
              </li>
              <li>
                <Link to="/">Cursos</Link>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            <div className="uk-navbar-item">
              <div>
                <a
                  className="uk-navbar-toggle"
                  uk-search-icon="true"
                  href="#"
                ></a>
                <div
                  className="uk-drop"
                  uk-drop="mode: click; pos: left-center; offset: 0"
                >
                  <form className="uk-search uk-search-navbar uk-width-1-1">
                    <input
                      className="uk-search-input"
                      type="search"
                      placeholder="Buscar..."
                      autoFocus
                    ></input>
                  </form>
                </div>
              </div>
              <button className="uk-button btn-nav-bar">Suscribete!</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav
