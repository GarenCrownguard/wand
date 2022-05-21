import React from "react";
import { Column, Row } from "simple-flexbox";
import { useHistory } from "react-router-dom";
import { convertSlugToUrl } from "../../../resources/utilities";
import SLUGS from "../../../resources/slugs";

import * as Logo from '../../../assets/icons/';

import MenuItem from "./Menuitem";

function MenuitemComponent() {
  const { push } = useHistory();

  function onClick(slug, parameters = {}) {
    push(convertSlugToUrl(slug, parameters));
  }

  return (
    <>
      <MenuItem
        id={SLUGS.dashboard}
        icon={Logo.IconDashboard}
        title="Dashboard"
        isActive={true}
        onClick={() => onClick(SLUGS.dashboard)}
      />
      <MenuItem
      id={SLUGS.account}
      icon={Logo.IconDashboard}
      title="Account"
      isActive={false}
      onClick={() => onClick(SLUGS.account)}
      />
      <MenuItem
        id={SLUGS.dashboard}
        title="Swap"
        icon={Logo.IconSettings}
        onClick={() => onClick(SLUGS.dashboard)}
      />
    </>
  );
}

export default MenuitemComponent;
