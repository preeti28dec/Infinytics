
import {AiOutlineMenu} from 'react-icons/ai'
import { slide as Menu } from 'react-burger-menu'
const HamburgerMenu = () => (
    <div className=' '>
        <Menu customBurgerIcon={<AiOutlineMenu />} width={'auto'} className='left-0 top-12' >
            <Links />
        </Menu>
    </div>
)
export const Links = () => (<>
    <div className=''>
        <a href="/" className='font-font-normal text-[18px] font-Quicksand'>
            Home
        </a>
    </div>

    <div>
        <a href="#about" className='font-font-normal text-[18px] font-Quicksand'>
            About
        </a>
    </div>
    <div>
        <a href="#services" className='font-font-normal text-[18px] font-Quicksand' >
            Services
        </a>
    </div>
</>)

export default HamburgerMenu