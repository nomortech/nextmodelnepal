"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Menu } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegStickyNote } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const pathname = usePathname();

  console.log(pathname);

  const links = [
    {
      name: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      name: "Events",
      href: "/events/1",
      active: pathname === "/events",
    },
    {
      name: "About",
      href: "/about",
      active: pathname === "/about",
    },
    {
      name: "Contact",
      href: "/contact",
      active: pathname === "/contact",
    },
  ];

  return (
    <>
      <div className="main flex w-full flex-wrap items-center justify-between px-[60px] py-[30px]">
        <div className="logo">
          <Image src={"/logo.png"} alt="logo" width={100} height={100}></Image>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-label="Toggle Menu"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <div className={`w-full md:flex md:w-auto hidden md:block`} id="navbar-default">
          <ul className={`flex gap-5 items-center justify-center text-[1.5rem]`}>
            {links.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className={`${item.active ? "active" : "inactive"}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Menu trigger="hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                  <span className="cursor-pointer">Hire Model</span>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>
                    <Link href="/models/hire/male">Male Models</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href="/models/hire/female">Female Models</Link>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </li>

            <li>
              <Menu trigger="hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                  <span className="cursor-pointer">Services</span>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>
                    <Link href="/">Event Management</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href="/">Talent Management</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href="/">Other Services</Link>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </li>

            <li className="flex items-center ml-4">
              <button aria-label="Open cart" onClick={openCart}>
                <RxHamburgerMenu size={40} />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div id="drawer-navigation" className={`fixed top-0 left-0 z-40 w-full h-full p-4 overflow-y-auto transition-transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} bg-white dark:bg-gray-800`} tabIndex={-1} aria-labelledby="drawer-navigation-label">
        {/* <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5> */}
        <button onClick={() => setIsMenuOpen(!setIsMenuOpen)} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
          <svg aria-hidden="true" className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <span className="sr-only">Close menu</span>
        </button>
        <Image
          src={"/logo.png"}
          width={500}
          height={500}
          alt="logo"
          className="w-[36%] mx-auto" />
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {links.map((item, i) => (
              <li key={i}>
                <Link
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  href={item.href}
                  className={`flex justify-center ${item.active ? "active" : "inactive"}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="flex justify-center">
              <Menu trigger="hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                  <span className="cursor-pointer">Hire Model</span>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>
                    <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="/models/hire/male">Male Models</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="/models/hire/female">Female Models</Link>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </li>

            <li className="flex justify-center">
              <Menu trigger="hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                  <span className="cursor-pointer">Services</span>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>
                    <Link href="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>Event Management</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>Talent Management</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>Other Services</Link>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </li>
            {/* <li>
              <Link href="#" className="flex justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <a href="#" className="flex justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ms-3 whitespace-nowrap">Kanban</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ms-3 whitespace-nowrap">Inbox</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ms-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ms-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ms-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ms-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>

      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[1.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-secondary [color:black_!important] p-6 backdrop-blur-xl md:w-[390px]">
              <div className="flex items-center justify-end">
                <button aria-label="Close cart" onClick={closeCart}>
                  <RxCross1 size={25} />
                </button>
              </div>

              <div className="main flex flex-col gap-4 p-[2rem]">
                <h1 className="font-bold text-[24px]">Logo</h1>
                <h2>Nepals No 1 Model Agency</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
