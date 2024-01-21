import { Dropdown } from "flowbite-react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-10">
        <div className="hidden md:blok">
          <Dropdown
            label={<GiHamburgerMenu size={25} />}
            dismissOnClick={false}
            arrowIcon={false}
            inline
            style={{ backgroundColor: "transparent", padding: 0 }}
            theme={"light"}
          >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Villa Categories</Dropdown.Item>
            <Dropdown.Item>Gallery</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="md:hidden flex">
          <Dropdown
            label={<GiHamburgerMenu size={25} />}
            dismissOnClick={false}
            arrowIcon={false}
            inline
            style={{ backgroundColor: "transparent", padding: 0 }}
            theme={"light"}
          >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>
              <Dropdown
                label="Villa Category"
                dismissOnClick={false}
                inline
                style={{ backgroundColor: "transparent", padding: 0 }}
              >
                <Dropdown.Item>4 Badroom villa</Dropdown.Item>
                <Dropdown.Item>2 Badroom villa</Dropdown.Item>
                <Dropdown.Item>Jogloo house</Dropdown.Item>
                <Dropdown.Item>Kudus house</Dropdown.Item>
                <Dropdown.Item>Bamboo studio</Dropdown.Item>
                <Dropdown.Item>Bamboo house</Dropdown.Item>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item>Gallery</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="hidden md:block">
          <Dropdown
            label="Villa Category"
            dismissOnClick={false}
            inline
            style={{ backgroundColor: "transparent", padding: 0 }}
          >
            <Dropdown.Item>4 Badroom villa</Dropdown.Item>
            <Dropdown.Item>2 Badroom villa</Dropdown.Item>
            <Dropdown.Item>Jogloo house</Dropdown.Item>
            <Dropdown.Item>Kudus house</Dropdown.Item>
            <Dropdown.Item>Bamboo studio</Dropdown.Item>
            <Dropdown.Item>Bamboo house</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <div className="hidden md:flex gap-10 items-center">
        <p>Contact us</p>
        <button className="bg-emerald-700 text-white px-6 py-1">login</button>
      </div>
    </div>
  );
}

export default Navbar;
