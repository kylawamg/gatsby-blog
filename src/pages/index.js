import React from "react"
import usePosts from "../hooks/usePosts"

import Layout from "../components/layout"
import PostsComponent from "../components/posts"
import SubHeader from "../components/header/sub-header"
import About from "../components/about"
import TrainingSection from "../components/training-section";

const IndexPage = () => {
  const postsResponse = usePosts()

  return (
    <Layout subheader={<SubHeader />}>
      <div>
        <PostsComponent posts={postsResponse.allStrapiPost.nodes} />
        <TrainingSection />
        <About />
      </div>
    </Layout>
  )
}
export default IndexPage
