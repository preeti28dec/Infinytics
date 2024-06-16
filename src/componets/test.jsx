import HamburgerMenu from "./hamburger";

export default function Test() {
    return (
        <div className='max-w-full  flex justify-start items-center bg-black mr-4 mb-4 text-white rounded-md '>
            <div className='flex md:hidden '><HamburgerMenu/></div>
        </div>

    )
}