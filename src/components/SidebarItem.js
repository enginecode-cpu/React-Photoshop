import React from "react";
import cn from "classnames";

function SidebarItem({ name, active, handleClick }) {
  return (
    <button className={cn("sidebar-item", { active })} onClick={handleClick}>
      {name}
    </button>
  );
}

export default SidebarItem;
