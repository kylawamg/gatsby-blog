import React from "react"
import { Link } from "gatsby"
import CardUser from "./cards/card-user"
const About = () => {
  return (
    <div className="bg-background_gray">
      <div className="relative container mx-auto">
        <section className="p-12 lg:px-32 px-6">
          <h2 className="text-mainTitle text-title_purple-primary font-bold font-primary">
            Quiénes somos
          </h2>
          <p className="lg:w-3/4 w-full text-2xl font-secondary text-title_purple-primary">
            Optional. Specifies the character, or the regular expression, to use
            for splitting the string.
          </p>

          <div className="flex flex-wrap mt-16 h-user_section_mobile lg:h-user_section">
            <div className="w-full lg:w-1/3">
              <CardUser></CardUser>
            </div>
            <div className="w-full lg:w-1/3">
              <CardUser></CardUser>
            </div>
            <div className="w-full lg:w-1/3">
              <CardUser></CardUser>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
