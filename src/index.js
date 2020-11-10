// https://github.com/frontend-collective/react-sortable-tree#data-helper-functions

import React, { Component } from "react";
import { render } from "react-dom";
import SortableTree from "react-sortable-tree";

import { Button } from "antd";

// import "antd/dist/antd.css";
// import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        {
          title: "Chicken",
          expanded: true,
          children: [{ title: "Eggssss", category: "sdsd" }]
        },
        { title: "Chicken", expanded: true, children: [{ title: "Egg" }] },
        { title: "Chicken", expanded: true, children: [{ title: "Egg" }] },
        { title: "Chicken", expanded: true, children: [{ title: "Egg" }] },
        {
          title: "Chicken ChickenChickenChicken",
          expanded: true,
          children: [
            { title: "hasan" },
            { title: "akif" },
            { title: "yumurta" }
          ]
        }
      ]
    };
  }

  addNew(e) {
    let hehe = this.state.treeData;
    hehe.push({ title: "mahmut" });
    this.setState({ treeData: hehe });
    e.preventDefault();
  }

  render() {
    return (
      <div style={{ height: 750 }}>
        <Button
          href=""
          onClick={(e) => {
            this.addNew(e);
          }}
        >
          button
        </Button>
        <SortableTree
          rowHeight={50}
          treeData={this.state.treeData}
          onChange={(treeData) => {
            this.setState({ treeData });
            console.log(treeData);
          }}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
