import React from "react"
import NavResourceItem from "../common/NavResourceItem"

const NavDropdownResourceColumn = ({ title, content, slug }) => {
  return (
    <div className="col-lg-4 nav-col">
      <h4 className="title">{title}</h4>
      <div className="row flex-column">
        {content &&
          content.map(({ title, content, slug }, idx) => (
            <NavResourceItem
              title={title}
              content={content}
              slug={slug}
              key={idx}
            />
          ))}
      </div>
    </div>
  )
}

export default NavDropdownResourceColumn
