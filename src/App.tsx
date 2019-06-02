import React, { useState } from "react";
import "./App.css";
import {
  SearchState,
  IntegratedFiltering,
  FilteringState
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  ColumnChooser,
  TableColumnVisibility,
  Toolbar,
  SearchPanel
} from "@devexpress/dx-react-grid-material-ui";
import TableTitle from "./Plugins/TableTitle";
import FilterButton from "./Plugins/FilterButton";
import Paper from "@material-ui/core/Paper";

const App: React.FC = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const filterButtonHandler = () => setFilterToggle(!filterToggle);
  return (
    <div className="App">
      <Paper style={{ margin: "10px" }} elevation={5}>
        <Grid
          rows={[
            { id: 0, product: "DevExtreme", owner: "DevExpress" },
            { id: 1, product: "DevExtreme Reactive", owner: "DevExpress" }
          ]}
          columns={[
            { name: "id", title: "ID" },
            { name: "product", title: "Product" },
            { name: "owner", title: "Owner" }
          ]}
        >
          <FilteringState defaultFilters={[]} />
          <SearchState />
          <IntegratedFiltering />
          <Table />
          <TableHeaderRow />
          {filterToggle ? <TableFilterRow /> : null}
          <TableColumnVisibility />
          <Toolbar />
          <SearchPanel />
          <TableTitle title={"Logging Table"} />
          <FilterButton toggleFilterButton={filterButtonHandler} />
          <ColumnChooser />
        </Grid>
      </Paper>
    </div>
  );
};

export default App;
