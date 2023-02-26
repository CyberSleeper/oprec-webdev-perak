import Link from 'next/link'
import { BsHouseDoor } from "react-icons/bs"

function Navbar() {
  return (
    <nav className="bg-[#e9dea6] top-0 flex justify-between items-center px-4 py-3 w-full">
			<Link href="/">
				<img alt="Logo" src="/NavbarLogo.svg"/>
			</Link>
			<button className="bg-[#eabb76] rounded-xl px-5 py-3 flex gap-1 items-center">
				<BsHouseDoor/> Home
			</button>
    </nav>
  )
}

export default Navbar;