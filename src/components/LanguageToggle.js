import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const ToggleContainer = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  align-items: center;
  background: rgba(26, 26, 26, 0.98);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(0, 212, 255, 0.5);
  border-radius: 40px;
  padding: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 12px 40px rgba(0, 212, 255, 0.3);
  overflow: hidden;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 16px 50px rgba(0, 212, 255, 0.4);
    transform: translateY(-3px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(0, 212, 255, 0.15),
      rgba(0, 153, 204, 0.15)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    top: 15px;
    right: 15px;
    padding: 4px;
  }
`;

const ToggleTrack = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 90px;
  height: 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 80px;
    height: 36px;
  }
`;

const ToggleIndicator = styled(motion.div)`
  position: absolute;
  top: 2px;
  width: 42px;
  height: 36px;
  background: ${(props) => props.theme.colors.gradient};
  border-radius: 22px;
  box-shadow: 0 6px 16px rgba(0, 212, 255, 0.4);
  z-index: 1;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 36px;
    height: 32px;
    top: 2px;
  }
`;

const LanguageButton = styled(motion.button)`
  background: transparent;
  border: none;
  color: ${(props) => (props.active ? "#fff" : "#aaa")};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  width: 45px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
  letter-spacing: 0.5px;

  &:hover {
    color: ${(props) =>
      props.active ? "#fff" : props.theme.colors.primary};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 40px;
    height: 36px;
    font-size: 12px;
  }
`;

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <ToggleContainer
      initial={{ opacity: 0, scale: 0.9, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.1,
        type: "spring",
        stiffness: 150,
      }}
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ToggleTrack>
        <ToggleIndicator
          animate={{
            x: language === "en" ? 2 : 46,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
        <LanguageButton
          active={language === "en"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          EN
        </LanguageButton>
        <LanguageButton
          active={language === "fr"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          FR
        </LanguageButton>
      </ToggleTrack>
    </ToggleContainer>
  );
};

export default LanguageToggle;
