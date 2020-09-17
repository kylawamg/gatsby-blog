import React from "react"
import MainHeader from "./main-header"
import SubHeader from "./sub-header"
import "./header-wrapper.scss"

const HeaderWrapper = () => {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  )
}

export default HeaderWrapper
