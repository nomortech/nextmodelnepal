"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Menu } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
      href: "/events",
      active: pathname === "/events",
    },
    {
      name: "About",
      href: "/about",
      active: pathname === "/about",
    },
    {
      name: "Hire Model",
      href: "/models/hire",
      active: pathname === "/model",
    },
    {
      name: "Contact",
      href: "/contact",
      active: pathname === "/contact",
    },
  ];

  return (
    <>
      <div className="main flex  items-center justify-between px-[60px] py-[30px]">
        <div className="logo">
          <Image src={"/logo.png"} alt="logo" width={100} height={100}></Image>
        </div>

        <ul className="flex gap-5 items-center justify-center text-[1.5rem]">
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
