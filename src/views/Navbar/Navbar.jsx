import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Navbar, Container, Nav, Button } from "react-bootstrap";

import useWindowOnScroll from "hooks/useWindowOnScroll";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Icon from "components/Icon";
import NavItem from "components/NavItem";

import "./Navbar.scss";

const MyNavbar = ({ anchors, frontmatter, extraItems }) => {
    const { brand, menuText } = frontmatter;

    const handleScrollToTop = useSmoothScrollTo(0);

    const [expanded, setExpanded] = React.useState(false);
    const toggleMenu = React.useCallback(() => {
        setExpanded(!expanded);
    }, [expanded]);
    const closeMenu = React.useCallback(() => {
        setExpanded(false);
    }, []);
    const handleBrandClick = React.useCallback(() => {
        closeMenu();
        handleScrollToTop();
    }, [closeMenu, handleScrollToTop]);

    const [shrink, setShrink] = React.useState(false);
    const handleWindowScroll = React.useCallback(() => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setShrink(scrollTop > 100);
    }, []);
    useWindowOnScroll(handleWindowScroll);

    return (
        <Navbar
            className={clsx("navbar-root", { "navbar-shrink": shrink })}
            expand="lg"
            fixed="top"
            expanded={expanded}
        >
            <Container>
                <Navbar.Brand className="cursor-pointer" onClick={handleBrandClick}>
                    <img src="https://i.ibb.co/NYfG04k/logo.png" alt="logo" /> <span className="logo_text">{brand}</span>
                </Navbar.Brand>
                <Navbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation">
                    {menuText}
                    <Icon iconName="BarsIcon" />
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="align-items-lg-center text-uppercase ml-auto">
                        {anchors.map((anchor) => (
                            <NavItem key={anchor} to={anchor} onClick={closeMenu} />
                        ))}
                    </Nav>
                    <Button
                        variant="success"
                        className="d-inline d-lg-none d-xl-inline ml-xl-3"
                        target="_blank"
                        rel="noreferrer"
                        href="https://api.whatsapp.com/send?phone=79120514095&text=Здравствуйте,%20я%20хочу%20арендовать"
                    >
                        <Icon iconName="WhatsappIcon" />
                        &nbsp; <span style={{ fontWeight: "300" }}>Написать в WhatsApp</span>
                    </Button>
                    {/* {extraItems} */}
                </Navbar.Collapse>
                <a 
                    href="https://api.whatsapp.com/send?phone=79120514095&text=Здравствуйте,%20я%20хочу%20арендовать"
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp bounce-2"
                >
                    <Icon className="icon" iconName="WhatsappIcon"/>
                </a>
            </Container>
        </Navbar>
    );
};

MyNavbar.propTypes = {
    anchors: PropTypes.arrayOf(PropTypes.string),
    frontmatter: PropTypes.object,
    extraItems: PropTypes.any,
};

MyNavbar.defaultProps = {
    anchors: [],
    frontmatter: {},
    extraItems: null,
};

export default MyNavbar;
