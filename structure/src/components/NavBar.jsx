import React from 'react'
import { FaBeer } from "react-icons/fa"

function NavBar() {
    const [nav, setNav] = useState(false)
    const handleNav = () =>
    {
        setNav(!nav)
    }
  return (
    <div>NavBar</div>
  )
}

export default NavBar
