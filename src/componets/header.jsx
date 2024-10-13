import React from "react";
import { Links } from "./hamburger";

function Header() {
  return (
    <section className="border-b-2 mx-auto main_header  ">
      <div className=" sticky top-0">
      <div className="flex justify-between item-center items-center main_header1 w-10/12 mx-auto">
        <div className="rounded-lg px-4 flex gap-3 items-center">
          <div className="flex items-center">
            <div className="mt-2 mx-2">
              <img src="../images/Infinytics2.svg"  class="h-[50px] object-contain" alt="logo-error" />
            </div>
          </div>
        </div>
        <div className="links flex gap-10 font-[400px] text-[18px] font-Quicksand ">
          <Links />
        </div>
      </div>
      </div>
    </section>
  );
}

export default Header;
