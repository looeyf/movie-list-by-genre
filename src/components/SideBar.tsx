interface SideBarProps {
  children: JSX.Element[] | JSX.Element;
}

import "../styles/sidebar.scss";

export function SideBar(props: SideBarProps) {
  const { children } = props;

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">{children}</div>
    </nav>
  );
}
