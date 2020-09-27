import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardTrainingSVG from "./cards/card-training-svg"
import CardTraining from "./cards/card-training"
import AngularLogo from "../images/angular-logo.svg"

const TrainingSection = () => {
  const data = useStaticQuery(graphql`
    query {
      vue: file(relativePath: { eq: "vue-logo.png" }) {
        childImageSharp {
          fluid(base64Width: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sass: file(relativePath: { eq: "sass-logo.png" }) {
        childImageSharp {
          fluid(base64Width: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      node: file(relativePath: { eq: "node-logo.png" }) {
        childImageSharp {
          fluid(base64Width: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      js: file(relativePath: { eq: "js-logo.jpeg" }) {
        childImageSharp {
          fluid(base64Width: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="training-section" className="bg-background_gray">
      <div>
        <section className="p-12 lg:px-32 px-6">
          <h2 className="text-mainTitle text-title_purple-primary font-bold font-primary">
            Formación
          </h2>
          <p className="lg:w-3/4 w-full text-2xl font-secondary text-title_purple-primary">
            The monkey-rope is found in all whalers; but it was only in the
            Pequod that the monkey and his holder were
          </p>
          <div className="flex flex-wrap mt-16">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <CardTrainingSVG
                logo={AngularLogo}
                title={"Curso Angular Avanzado"}
                description={`Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
                malesuada enim in dolor euismod, id commodo mi consectetur.ehicula
                odio. Vestibulum interdum vestibulum felis ac molestie.`}
                link={"/"}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <CardTraining
                logo={data.vue.childImageSharp.fluid}
                title={"Curso VueJS"}
                description={`Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. 
                In malesuada enim in dolor euismod, id commodo mi consectetur. 
                Curabitur at vestibulum nisi.`}
                link={"/"}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <CardTraining
                logo={data.sass.childImageSharp.fluid}
                title={"Curso Sass avanzado"}
                description={`Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. 
                In malesuada enim in dolor euismod, id commodo mi consectetur.`}
                link={"/"}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <CardTraining
                logo={data.node.childImageSharp.fluid}
                title={"Curso NodeJS"}
                description={`Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. 
                In malesuada enim in dolor euismod, id commodo mi consect stibulum felis ac molestie.`}
                link={"/"}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <CardTraining
                logo={data.js.childImageSharp.fluid}
                title={"Curso JavaScript avanzado"}
                description={`Dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. 
                Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. 
                Vestibulum interdum vestibulum felis ac molestie.`}
                link={"/"}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TrainingSection
