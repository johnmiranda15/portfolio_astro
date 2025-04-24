// src/components/NavbarToggle.jsx
import { useEffect } from "react";

export default function NavbarToggle() {
  useEffect(() => {
    const $menu = document.querySelector(".nav");
    const $menuDrop = document.querySelector(".menu-drop");
    const $btnmenu = document.querySelector(".btn-menu");
    const $linea1 = document.querySelector("#linea1");
    const $linea2 = document.querySelector("#linea2");
    const $linea3 = document.querySelector("#linea3");

    const toggleMenu = () => {
      $linea1.classList.toggle("activelinea1__bars-menu");
      $linea2.classList.toggle("activelinea2__bars-menu");
      $linea3.classList.toggle("activelinea3__bars-menu");
      $menu.classList.toggle("menu-activado");
      $menuDrop.classList.toggle("activa-menu-drop");
    };

    $btnmenu?.addEventListener("click", toggleMenu);
    $menuDrop?.addEventListener("click", toggleMenu);

    return () => {
      $btnmenu?.removeEventListener("click", toggleMenu);
      $menuDrop?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return null;
}
