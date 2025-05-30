import "./styles.less";

import { Children, FC, isValidElement, ReactNode } from "react";

type HeaderProps = {
	children: ReactNode;
};

const Header: FC<HeaderProps> = ({ children }) => {
	const childArray = Children.toArray(children);

	for (const child of childArray) {
		if (!isValidElement(child) || child.type !== "header") {
			throw new Error("Header slot can only contain <header> elements");
		}
	}

	return <>{children}</>;
};

type FooterProps = {
	children: ReactNode;
};

const Footer: FC<FooterProps> = ({ children }) => {
	const childArray = Children.toArray(children);

	for (const child of childArray) {
		if (!isValidElement(child) || child.type !== "footer") {
			throw new Error("Footer slot can only contain <footer> elements");
		}
	}

	return <>{children}</>;
};

type MainProps = {
	children: ReactNode;
};

const Main: FC<MainProps> = ({ children }) => {
	const childArray = Children.toArray(children);

	for (const child of childArray) {
		if (!isValidElement(child)) {
			throw new Error("Main slot can only contain valid elements");
		}
	}

	return <main className="main">{children}</main>;
};

type DefaultLayoutComponents = {
	Header: typeof Header;
	Footer: typeof Footer;
	Main: typeof Main;
};

type DefaultLayoutProps = {
	children: ReactNode;
};

type DefaultLayoutComponent = FC<DefaultLayoutProps> & DefaultLayoutComponents;

export const DefaultLayout: DefaultLayoutComponent = ({ children }) => {
	const childArray = Children.toArray(children);

	let hasMainSlot = false;
	let hasHeaderSlot = false;
	let hasFooterSlot = false;

	for (const child of childArray) {
		if (isValidElement(child)) {
			const childType = child.type;

			if (childType === Header) {
				if (hasHeaderSlot) {
					throw new Error("DefaultLayout can only contain one Header slot");
				}

				hasHeaderSlot = true;
			} else if (childType === Footer) {
				if (hasFooterSlot) {
					throw new Error("DefaultLayout can only contain one Footer slot");
				}

				hasFooterSlot = true;
			} else if (childType === Main) {
				if (hasMainSlot) {
					throw new Error("DefaultLayout can only contain one Main slot");
				}

				hasMainSlot = true;
			} else {
				throw new Error(
					"DefaultLayout can only contain Header, Footer, or Main components"
				);
			}
		} else {
			throw new Error("DefaultLayout can only contain Header, Footer, or Main components");
		}
	}

	if (!hasMainSlot) {
		throw new Error("DefaultLayout must contain a Main component");
	}

	const headerSlot = childArray.find((child) => isValidElement(child) && child.type === Header);

	const footerSlot = childArray.find((child) => isValidElement(child) && child.type === Footer);

	const mainSlot = childArray.find((child) => isValidElement(child) && child.type === Main);

	return (
		<>
			{headerSlot}
			{mainSlot}
			{footerSlot}
		</>
	);
};

DefaultLayout.Header = Header;
DefaultLayout.Footer = Footer;
DefaultLayout.Main = Main;
