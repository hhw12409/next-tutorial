import { useRouter } from "next/router";
import React from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";

export default function Gnb() {
  const [activeItem, setActiveItem] = React.useState("home");
  const router = useRouter();
  function goLink(_: any, data: MenuItemProps) {
    switch (data.name) {
      case "home":
        setActiveItem("home");
        router.push("/");
        break;
      case "about":
        setActiveItem("about");
        router.push("/about");
        break;
    }
  }

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={goLink}
      />
    </Menu>
  );
}
