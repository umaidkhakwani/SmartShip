import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, Tooltip } from "@mui/material";
import MKBox from "components/MKBox"; // Assuming MKBox is a custom Box component
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PropTypes from "prop-types";

const flagSources = {
  English: "https://flagcdn.com/w320/us.png",
  Русский: "https://flagcdn.com/w320/ru.png",
  Türkmen: "https://flagcdn.com/w320/tm.png",
  Қазақ: "https://flagcdn.com/w320/kz.png",
  عربي: "https://flagcdn.com/w320/ae.png",
};

const languageNames = {
  English: "en",
  Русский: "ru",
  Türkmen: "tm",
  Қазақ: "kz",
  عربي: "ar",
};

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  const { t, i18n } = useTranslation();
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);

  // Set initial language on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "English"; // Default to English
    i18n.changeLanguage(languageNames[savedLanguage]);
    onLanguageChange(savedLanguage);
  }, [i18n, onLanguageChange]);

  const openLanguageMenu = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const closeLanguageMenu = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(languageNames[language]);
    onLanguageChange(language);
    localStorage.setItem("language", language);
    closeLanguageMenu();
  };

  return (
    <MKBox ml="auto" display="flex" alignItems="center" sx={{ mr: { xs: 1, lg: 0 } }}>
      <Tooltip title={t("selectLanguage")}>
        <MKBox
          onClick={openLanguageMenu}
          display="flex"
          alignItems="center"
          sx={{
            cursor: "pointer",
            gap: 0.5,
          }}
        >
          <img
            src={flagSources[selectedLanguage]}
            alt={`${selectedLanguage} flag`}
            style={{ width: 16, height: 12 }}
          />
          <KeyboardArrowDownIcon fontSize="small" />
        </MKBox>
      </Tooltip>
      <Menu
        id="language-menu"
        anchorEl={languageAnchorEl}
        open={Boolean(languageAnchorEl)}
        onClose={closeLanguageMenu}
        keepMounted
        sx={{ "& .MuiPaper-root": { minWidth: 100 } }}
      >
        {Object.keys(flagSources).map((language) => (
          <MenuItem
            key={language}
            onClick={() => handleLanguageChange(language)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              padding: "5px 10px",
            }}
          >
            <img
              src={flagSources[language]}
              alt={`${language} flag`}
              style={{ width: 16, height: 12 }}
            />
            <span style={{ fontSize: "12px" }}>{t(language)}</span>
          </MenuItem>
        ))}
      </Menu>
    </MKBox>
  );
};

// Prop validation for selectedLanguage and onLanguageChange
LanguageSelector.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

export default LanguageSelector;
