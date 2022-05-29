import React from "react";
import { any, arrayOf, func, string } from "prop-types";
import { Column, Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";
import CollapsibleContent from "components/collapsible/CollapsibleContent";
import { useSidebar } from "hooks/useSidebar";

const useStyles = createUseStyles({
  activeContainer: {
    backgroundColor: ({ theme }) => theme.color.paleBlueTransparent,
  },
  container: {
    display: "flex",
    height: 27,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: ({ theme }) => theme.color.paleBlueTransparent,
    },
    paddingLeft: 55,
    transition: "all 0.2s ease-in-out",
    marginTop: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    lineHeight: "20px",
    letterSpacing: "0.2px",
    color: ({ theme, isActive }) =>
      isActive ? theme.color.paleBlue : theme.color.grayishBlue,
    marginLeft: 10,
    // marginRight:15,
  },
  sooniconcontainer: {
    marginRight: 0,
    marginLeft: "auto",
    marginTop: 14,
  },
});

function MenuItemComponent({
  children,
  icon: Icon,
  id,
  items = [],
  level = 1,
  onClick,
  title,
  soonIcon: SoonIcon,
}) {
  const theme = useTheme();
  const isCollapsible = children && children.length > 0;
  const { isExpanded, isActive, onItemClick } = useSidebar({
    isCollapsible,
    item: id,
    items,
  });
  const classes = useStyles({ theme, level, isActive });
  //   const classNameColumn = isActive ? classes.leftBar : "";
  const classNameContainer = [
    classes.container,
    isActive && classes.activeContainer,
  ].join(" ");
  const iconColor = isActive ? theme.color.paleBlue : theme.color.grayishBlue2;

  function onItemClicked(e) {
    if (onClick) {
      onClick(e);
    }
    onItemClick();
  }

  return (
    <Column key={id}>
      <Row
        vertical="center"
        onClick={onItemClicked}
        className={classNameContainer}
      >
        <Icon fill={iconColor} opacity={!isActive && "0.4"} />
        <span className={classes.title}>{title}</span>
        <div className={classes.sooniconcontainer}>
          {SoonIcon && (
            <SoonIcon fill={iconColor} opacity={!isActive && "0.4"} />
          )}
        </div>
      </Row>
      {isCollapsible && (
        <CollapsibleContent expanded={isExpanded}>
          {children.map((child) => child.type({ ...child.props }))}
        </CollapsibleContent>
      )}
    </Column>
  );
}

MenuItemComponent.defaultProps = {};

MenuItemComponent.propTypes = {
  children: any,
  icon: func,
  id: string,
  onClick: func,
  items: arrayOf(string),
  title: string,
};

export default MenuItemComponent;
