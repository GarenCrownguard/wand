import React from "react";
import { any, arrayOf, func, string } from "prop-types";
import { Column, Row } from "simple-flexbox";
import { createUseStyles } from "react-jss";
import CollapsibleContent from "components/collapsible/CollapsibleContent";
import { useSidebar } from "hooks/useSidebar";

const useStyles = createUseStyles({
  activeContainer: {
    backgroundColor: () => "rgba(221, 226, 255, 0.08)",
  },
  container: {
    display: "flex",
    height: 27,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: () => "rgba(221, 226, 255, 0.08)",
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
      isActive ? '#DDE2FF' : '#A4A6B3',
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
  icon: icon,
  id,
  items = [],
  level = 1,
  onClick,
  title,
  soonicon: Soonicon,
}) {
  
  const isCollapsible = children && children.length > 0;
  const { isExpanded, isActive, onItemClick } = useSidebar({
    isCollapsible,
    item: id,
    items,
  });
  const classes = useStyles({ level, isActive });
  //   const classNameColumn = isActive ? classes.leftBar : "";
  const classNameContainer = [
    classes.container,
    isActive && classes.activeContainer,
  ].join(" ");
  const iconColor = isActive ? '#DDE2FF' : '#9fa2b4';

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
        <icon fill={iconColor} opacity={!isActive && "0.4"} />
        <span className={classes.title}>{title}</span>
        <div className={classes.sooniconcontainer}>
          {Soonicon && (
            <Soonicon fill={iconColor} opacity={!isActive && "0.4"} />
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
