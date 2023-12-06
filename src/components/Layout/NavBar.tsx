import styled from "styled-components";
import Image from "next/image";
import Logo from "/public/static/images/junusLogo.svg";
import { Row } from "components/Displays/Row";
import { BaseButton } from "components/Buttons";
import Enter from "components/Icons/Enter";
import { useState } from "react";
import RealState from "components/Icons/RealState";
import Bond from "components/Icons/Bond";
import Lendin from "components/Icons/Lendin";
import Panel from "components/Icons/Panel";
import Docs from "components/Icons/Docs";
import Github from "components/Icons/Github";
import FAQ from "components/Icons/FAQ";
import Discord from "components/Icons/Discord";
import Twitter from "components/Icons/Twitter";
import Telegram from "components/Icons/Telegram";
import LinkedIn from "components/Icons/LinkedIn";

interface Option {
  name: string;
  path: string;
  icon?: string;
  child?: Option[];
}

const Wrapper = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.6);
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0px 5rem;
`;

const SubMenu = styled.div<{ opened: boolean }>`
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6px);
  border: 2px solid rgba(255, 255, 255, 1);
  width: fit-content;
  min-width: 160px;
  top: 90px;
  padding: ${({ opened }) => (opened ? "5px" : "0px")};
  height: ${({ opened }) => (opened ? "fit-content" : "0px")};
  border-radius: 10px;
  transition: all 1s ease-out !important;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

const optionsMenu: Option[] = [
  { name: "Home", path: "/home" },
  {
    name: "Products",
    path: "/",
    child: [
      {
        name: "Real Estate",
        path: "/",
        icon: "estate",
      },
      {
        name: "Bonds",
        path: "/",
        icon: "bonds",
      },
      {
        name: "Lending/Borrowing",
        path: "/",
        icon: "lendingB",
      },
      {
        name: "Investor Dashboard",
        path: "/",
        icon: "investor",
      },
    ],
  },
  {
    name: "Resources",
    path: "/",
    child: [
      {
        name: "Docs",
        path: "/",
        icon: "docs",
      },
      {
        name: "Github",
        path: "/",
        icon: "git",
      },
      {
        name: "FAQ",
        path: "/",
        icon: "faq",
      },
    ],
  },
  {
    name: "Community",
    path: "/",
    child: [
      {
        name: "Discord",
        path: "/",
        icon: "discord",
      },
      {
        name: "Twitter",
        path: "/",
        icon: "twitter",
      },
      {
        name: "Telegram",
        path: "/",
        icon: "telegram",
      },
      {
        name: "LinkedIn",
        path: "/",
        icon: "linkedin",
      },
    ],
  },
];

export default function NavBar() {
  const [opened, setOpen] = useState(null);

  const toggleMenu = (index) => {
    setOpen((prevMenu) => (prevMenu === index ? null : index));
  };

  const [hoverStates, setHoverStates] = useState(Array(10).fill(false));

  const handleMouseOver = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseOut = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <Wrapper>
      <Image unoptimized={true} src={Logo} alt="Logo" />
      <Row width="fit-content" gap="3.5rem">
        {optionsMenu.map((option, index) => (
          <Menu>
            <BaseButton
              inverted={false}
              border={false}
              radius={20}
              padding="15px"
              onClick={() => toggleMenu(index)}
            >
              {option.name}
            </BaseButton>
            {opened === index && option.child && (
              <SubMenu opened={opened === index}>
                {option.child.map((option, index) => (
                  <BaseButton
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={() => handleMouseOut(index)}
                    inverted={false}
                    border={false}
                    radius={10}
                    padding="8px"
                    width="100%"
                    key={index}
                    justify="flex-start"
                    gap="8px"
                  >
                    {option.icon == "estate" && (
                      <RealState
                        fill={hoverStates[index] ? "white" : "#273039"}
                      ></RealState>
                    )}
                    {option.icon == "bonds" && (
                      <Bond
                        fill={hoverStates[index] ? "white" : "#273039"}
                      ></Bond>
                    )}
                    {option.icon == "lendingB" && (
                      <Lendin
                        fill={hoverStates[index] ? "white" : "#273039"}
                      ></Lendin>
                    )}
                    {option.icon == "investor" && (
                      <Panel
                        fill={hoverStates[index] ? "white" : "#273039"}
                      ></Panel>
                    )}
                    {option.icon == "docs" && (
                      <Docs
                        fill={hoverStates[index] ? "white" : "#273039"}
                      ></Docs>
                    )}
                    {option.icon == "git" && (
                      <Github
                        fill={hoverStates[index] ? "white" : "#273039"}
                      ></Github>
                    )}
                    {option.icon == "faq" && (
                      <FAQ
                        fill={hoverStates[index] ? "white" : "#273039"}
                      ></FAQ>
                    )}
                    {option.icon == "discord" && (
                      <Discord
                        fill={hoverStates[index] ? "white" : "#273039"}
                      ></Discord>
                    )}
                    {option.icon == "twitter" && (
                      <Twitter
                        fill={hoverStates[index] ? "white" : "#273039"}
                      ></Twitter>
                    )}
                    {option.icon == "telegram" && (
                      <Telegram
                        fill={hoverStates[index] ? "white" : "#273039"}
                      ></Telegram>
                    )}
                    {option.icon == "linkedin" && (
                      <LinkedIn
                        fill={hoverStates[index] ? "white" : "#273039"}
                      ></LinkedIn>
                    )}
                    {option.name}
                  </BaseButton>
                ))}
              </SubMenu>
            )}
          </Menu>
        ))}
        <BaseButton
          inverted={true}
          border={false}
          radius={100}
          padding="10px 15px"
          width="143px"
        >
          <Row gap="5px" justify="center">
            <Enter />
            Launch App
          </Row>
        </BaseButton>
      </Row>
    </Wrapper>
  );
}
