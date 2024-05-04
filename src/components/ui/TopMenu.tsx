import { titleFont } from "@/configs/fonts";
import { TiShoppingCart } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { RiPagesLine } from "react-icons/ri";
import Link from "next/link";

export const TopMenu = () => {
  const menuItemClass = "m-2 rounded-md p-2 transition-all hover:bg-gray-100";

  return (
    <div className="flex w-full items-center justify-between px-5">
      {/* Logo */}
      <div>
        <Link
          href="/"
          className={`${titleFont.className} font-bold antialiased`}
        >
          <span>Zapatos |</span>
          <span> Juan</span>
        </Link>
      </div>
      {/* Opciones de menú */}
      <div className="hidden items-center sm:flex">
        <a
          href="https://wa.link/z38vai"
          className={menuItemClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiShoppingCart className="inline h-5 w-5" /> Comprar
        </a>
        <a href="https://wa.link/2la1qf" className={menuItemClass}>
          <FiPhoneCall className="inline h-5 w-5" /> Contacto
        </a>
        <Link href="/miPage" className={menuItemClass}>
          <RiPagesLine className="inline h-5 w-5" /> Mi página
        </Link>
      </div>
    </div>
  );
};
