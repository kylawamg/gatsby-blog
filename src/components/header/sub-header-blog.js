import React from "react"
const SubHeaderBlog = () => {
  const items = [
    {
      name: "Angular",
      url: "#",
    },
    {
      name: "Vue",
      url: "#",
    },
    {
      name: "React",
      url: "#",
    },
    {
      name: "Javascript",
      url: "#",
    },
    {
      name: "React",
      url: "#",
    },
    {
      name: "Javascript",
      url: "#",
    },
    {
      name: "React",
      url: "#",
    },
    {
      name: "Javascript",
      url: "#",
    },

    {
      name: "HTML",
      url: "#",
    },
    {
      name: "CSS",
      url: "#",
    },
    {
      name: "TypeScript",
      url: "#",
    },
    {
      name: "Jest",
      url: "#",
    },
  ]
  return (
    <div className="container mx-auto">
      <section className="relative p-12 lg:px-32 px-6">
        <ul className="flex overflow-x-auto content-center text-sm text-title_gray-secondary font-primary">
          {items.map((item, index) => (
            <li key={index} className="mr-3">
              <a
                className="inline-block hover:border hover:border-blue-500 rounded-full py-1 px-3 hover:bg-background_cyan"
                href="#"
              >
                #{item.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default SubHeaderBlog
