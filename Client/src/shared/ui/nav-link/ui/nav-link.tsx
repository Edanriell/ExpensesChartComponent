import "./styles.less";

import { ComponentProps, FC, ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type NavLinkProps = {
	children: ReactNode;
	to: string;
} & Omit<ComponentProps<typeof Link>, "to" | "children" | "className">;

export const NavLink: FC<NavLinkProps> = ({ children, to, ...rest }) => {
	return (
		<Link className="link" to={to} {...rest}>
			{children}
		</Link>
	);
};
