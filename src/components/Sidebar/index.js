import React from "react";
import { Item, Logo, SidebarWrapper, Tooltip } from "./style";
import arbitrumLogo from "../../assets/images/arbitrum-logo.png";

function Sidebar() {
  const list = [
    {
      id: 1,
      name: "Section 1",
      link: "/section-1",
    },
    {
      id: 2,
      name: "Section 2",
      link: "/section-2",
    },
    {
      id: 3,
      name: "Section 3",
      link: "/section-3",
    },
    {
      id: 4,
      name: "Section 4",
      link: "/section-4",
    },
    {
      id: 5,
      name: "Section 5",
      link: "/section-5",
    },
    {
      id: 6,
      name: "Section 6",
      link: "/section-6",
    },
    {
      id: 7,
      name: "Section 7",
      link: "/section-7",
    },
    {
      id: 8,
      name: "Section 8",
      link: "/section-8",
    },
    {
      id: 9,
      name: "Section 9",
      link: "/section-9",
    },
    {
      id: 10,
      name: "Section 10",
      link: "/section-10",
    },
    {
      id: 11,
      name: "Section 11",
      link: "/section-11",
    },
    {
      id: 12,
      name: "Section 12",
      link: "/section-12",
    },
    {
      id: 13,
      name: "Section 13",
      link: "/section-13",
    },
  ];

  // click scroll to section
  const scrollToSection = (id) => {
    console.log('%cindex.js line:76 id', 'color: #007acc;', id);
    const section = document.getElementById("section-" + id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SidebarWrapper>
      <Logo>
        <img src={arbitrumLogo} alt="Arbitrum Logo" />
      </Logo>
      {list.map((item) => (
        <Item
          key={"sidebar-section" + item.id}
          onClick={() => scrollToSection(item.id)}
        >
          <Tooltip>{item.name}</Tooltip>
        </Item>
      ))}
    </SidebarWrapper>
  );
}

export default Sidebar;
