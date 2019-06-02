import React from "react";
import {
  Plugin,
  Template,
  TemplatePlaceholder
} from "@devexpress/dx-react-core";
import { makeStyles } from "@material-ui/styles";
import FilterList from "@material-ui/icons/FilterList";

interface Props {
  toggleFilterButton: () => void;
}

const useStyles = makeStyles({
  filterButtonContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: "15px"
  },
  filterButton: {
    cursor: "pointer"
  }
});

const pluginDependencies = [{ name: "Toolbar" }];

const ToolbarFilter = (props: Props) => {
  const classes = useStyles();
  return (
    <Plugin
      dependencies={pluginDependencies}
      children={
        <Template name={"toolbarContent"}>
          <TemplatePlaceholder />
          <div className={classes.filterButtonContainer}>
            <FilterList
              className={classes.filterButton}
              onClick={props.toggleFilterButton}
            />
          </div>
        </Template>
      }
      name="ToolBarFilterButton"
    />
  );
};

export default ToolbarFilter;
