import React from "react"
import MainHeader from "./main-header"
import SubHeader from "./sub-header"
import "./header-wrapper.scss"

const HeaderWrapper = () => {
  return (
    <div className="absolute top-0 left-0 w-full mx-auto lg:px-20 px-4">
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  )
}

export default HeaderWrapper
