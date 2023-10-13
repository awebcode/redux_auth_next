import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Menu, Dropdown, Button } from "antd";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { setTheme } = useTheme();

  const handleMenuClick = (e) => {
    const selectedTheme = e.key;
    setTheme(selectedTheme);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="light">Light</Menu.Item>
      <Menu.Item key="dark">Dark</Menu.Item>
      <Menu.Item key="system">System</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <Button size="large" type="primary" icon={<SunIcon />} ghost>
          Toggle theme
        </Button>
      </a>
    </Dropdown>
  );
};

export default ModeToggle;
