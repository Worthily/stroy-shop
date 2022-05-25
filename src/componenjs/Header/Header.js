import React from 'react';
function Header() {
    return (React.createElement("div", { className: "header__wrapper" },
        React.createElement("div", { className: "header__logo-wrapper" },
            React.createElement("img", { src: "", alt: "logo", className: "header__logo" })),
        React.createElement("div", { className: "header__add-wrapper" }),
        React.createElement("div", { className: "header__buttons-wrapper" })));
}
export default Header;
