import React from "react"
import MainHeader from "./main-header"
import SubHeader from "./sub-header-post"

const HeaderWrapper = ({ children }) => {
  return (
    <div className="font-secondary custom-bg absolute top-0 left-0 w-full mx-auto lg:px-20 px-4">
      <MainHeader></MainHeader>
      {children}
    </div>
  )
}

export default HeaderWrapper
