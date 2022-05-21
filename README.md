# wand
FE for wand investments.

<!-- Deploying react app to github -->
https://betterprogramming.pub/how-to-host-your-react-app-on-github-pages-for-free-919ad201a4cb#:~:text=When%20you've%20successfully%20deployed,is%20hosted%20on%20GitHub%20Pages.

# Garen Fork: https://github.com/llorentegerman/react-admin-dashboard

Reference @
1. https://dev.to/llorentegerman/building-a-ui-from-scratch-responsive-sidebar-and-header-443g
2. https://dev.to/llorentegerman/building-a-ui-from-scratch-based-on-a-design-with-reactjs-3l1e
3. https://dev.to/llorentegerman/building-a-ui-from-scratch-responsive-sidebar-and-header-443g
4. https://dev.to/llorentegerman/building-a-ui-from-scratch-responsive-content-6b9



import { Column, Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    position: "absolute",
    // width: "98vw",
    height: "484px",
    left: "0px",
  },
});

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });