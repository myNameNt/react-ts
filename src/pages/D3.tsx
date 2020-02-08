import React from "react";
import * as d3 from "d3";
import { Button } from "antd";

import "./D3Css.css";
interface D3Props {}
interface D3State {
  defaultData: Data;
}
interface nodesItem {
  id: string;
  group: number;
}
interface linksItem {
  source: string;
  target: string;
  value: number;
}
interface Data {
  nodes: nodesItem[];
  links: linksItem[];
}

const defaultData: Data = require("./data.json");
const width: number = 600
const height: number = 600

class D3 extends React.PureComponent<D3Props, D3State> {
   public d3node: HTMLDivElement | null = null
  constructor(props: D3Props) {
    super(props);
    this.state = {
      defaultData
    };
  }
  handleAddNode() {
    
  }
  render() {
    return (
      <div className={"d3-sample"}>
        <div style={{ margin: "0 0 20px 0" }}>
          <Button onClick={this.handleAddNode}>Add node</Button>
        </div>
        <div className={"d3-node"} ref={node => (this.d3node = node)}></div>
      </div>
    );
  }
}

export default D3;
