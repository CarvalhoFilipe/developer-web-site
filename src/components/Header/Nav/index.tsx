import { NavLink, NavLinkProps } from "react-router-dom";

interface NavProps extends NavLinkProps {
  title: string;
}

export function Nav({ title, ...rest }: NavProps) {
  return (
    <NavLink
      {...rest}
      className={({ isActive }) => (isActive ? "active" : undefined)}
    >
      {title}
    </NavLink>
  );
}
