import React from "react"
import "./sub-header.scss"
import imgTag from "../../assets/images/tag.png"
const SubHeader = () => {
  return (
    <div className="container mx-auto">
      <section className="relative p-12 lg:px-32 px-6">
        <div className="flex lg:flex-wrap flex-wrap-reverse">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-primary text-title_gray-secondary leading-none lg:text-mainTitle">
              Curso de introducción a Gatsby
            </h1>
            <p className="mt-4 text-title_gray-secondary">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen b
            </p>
            <button className="mt-6 w-full lg:w-auto bg-transparent hover:bg-background_cyan text-background_cyan font-semibold hover:text-white py-2 px-6 border border-background_cyan hover:border-transparent rounded-full ">
              Ver temario
            </button>
          </div>
          <div className="lg:w-1/2 sm:m-4 lg:m-auto">
            <img className="" src={imgTag}></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SubHeader
