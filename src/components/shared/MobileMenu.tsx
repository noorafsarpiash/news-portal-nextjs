"use client";

import { Button } from "../ui/button";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const MobileMenu = () => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    SetIsMenuOpen(!isMenuOpen);

    return (
      <div>
        <div className="lg:hidden">
          <Button onClick={toggleMenu} variant={"outline"}>
            {isMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </Button>
        </div>
      </div>
    );
  };
};
export default MobileMenu;
