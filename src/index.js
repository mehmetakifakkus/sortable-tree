// https://github.com/frontend-collective/react-sortable-tree#data-helper-functions

// import "antd/dist/antd.css";
import "./index.css";
// import { Upload, Button, Tooltip, Form } from "antd";

import React, { Component } from "react";
import { render } from "react-dom";
import SortableTree from "react-sortable-tree";

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
        <SortableTree
          rowHeight={50}
          treeData={this.state.treeData}
          onChange={(treeData) => {
            this.setState({ treeData });
            console.log(treeData);
          }}
        />
        <a
          href=""
          onClick={(e) => {
            this.addNew(e);
          }}
        >
          button
        </a>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
