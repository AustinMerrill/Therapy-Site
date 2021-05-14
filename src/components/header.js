import * as React from "react"
import { GrMenu } from "react-icons/gr"
import { FaTimes } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanityHomePage {
        nodes {
          avatarText
        }
      }
    }
  `)
  const avatarName = data.allSanityHomePage.nodes[0].avatarText
  console.log(avatarName)
  const [menuClosed, setMenuClosed] = React.useState(true)

  return (
    <div className="md:flex md:justify-between ">
      <header className="flex justify-between items-center  ">
        <h2 className="text-center font-bold text-base mb-4">
          {avatarName} <br />
          <span className="align-center">THERAPIST</span>
        </h2>
        <div>
          {/* use menuClosed variable - if true - show GrMenu */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuClosed(!menuClosed)}
          >
            {menuClosed && <GrMenu />}
          </button>

          {/* use menuClosed variable - if false - show FaTimes */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuClosed(!menuClosed)}
          >
            {!menuClosed && <FaTimes />}
          </button>
        </div>
      </header>
      {/* className="flex flex-col hidden " + (menuTrue block) */}
      <nav
        className={
          "md:inline flex flex-col text-right mb-4 " +
          (menuClosed ? "hidden" : "block")
        }
      >
        <ul className="space-y-3 font-semibold text-lg md:flex md:space-y-0 md:space-x-4 md:text-base md:items-center">
          <li>
            <button onClick={() => scrollTo("#about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollTo("#specialties")}>
              Specialties
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo("#fee")}>Fees</button>
          </li>

          <li className="md:bg-teal md:text-white md:py-1 md:px-4 md:rounded-lg">
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
