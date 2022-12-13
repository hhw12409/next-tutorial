import { useRouter } from "next/router";
import React from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";

export default function Gnb() {
  const [activeItem, setActiveItem] = React.useState("home");
  const router = useRouter();
  function goLink(_: any, data: MenuItemProps) {
    switch (data.name) {
      case data.name:
        setActiveItem(data.name!);
        if (data.name === "home") {
          router.push("/");
        } else {
          router.push(`/${data.name}`);
        }
        break;
    }
  }

  return (
    <Menu inverted>
      {["home", "about", "admin"].map((el) => (
        <Menu.Item
          name={el}
          active={activeItem === el}
          onClick={goLink}
          key={el}
        />
      ))}
    </Menu>
  );
}
