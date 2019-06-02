import React from "react";
import {
  Plugin,
  Template,
  TemplatePlaceholder
} from "@devexpress/dx-react-core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  tableTitleContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: "15px"
  }
});

const pluginDependencies = [{ name: "Toolbar" }];

const ToolbarFilter = () => {
  const classes = useStyles();
  return (
    <Plugin
      dependencies={pluginDependencies}
      children={
        <Template name={"toolbarContent"}>
          <TemplatePlaceholder />
          <div className={classes.tableTitleContainer}>
            <Typography variant="h5" component="h2">
              Logging Table
            </Typography>
          </div>
        </Template>
      }
      name="ToolBarTitle"
    />
  );
};

export default ToolbarFilter;
