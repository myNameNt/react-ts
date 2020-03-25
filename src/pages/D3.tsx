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
const width: number = 600;
const height: number = 600;

class D3 extends React.PureComponent<D3Props, D3State> {
  public d3node: HTMLDivElement | null = null;
  svg!: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  color: d3.ScaleOrdinal<string, string> | undefined;
  simulation!: d3.Simulation<d3.SimulationNodeDatum, undefined>;
  linksGroup!: d3.Selection<SVGGElement, unknown, null, undefined>;
  nodesGroup!: d3.Selection<SVGGElement, unknown, null, undefined>;

  constructor(props: D3Props) {
    super(props);
    this.state = {
      defaultData
    };
  }
  componentDidMount() {
    this.svg = d3
      .select(this.d3node)
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    this.color = d3.scaleOrdinal(d3.schemeCategory10);
    this.simulation = d3
      .forceSimulation()
      .force(
        "link",
        d3.forceLink().id(d => String(d.index))
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));
    this.linksGroup = this.svg.append("g");
    this.nodesGroup = this.svg.append("g");

    this.updateDiagrarm();
  }
  componentDidUpdate(prevProps: D3Props, prevState: D3State) {
    if (this.state.defaultData !== prevState.defaultData) this.updateDiagrarm();
  }
  updateDiagrarm() {
    // const { defaultData } = this.state;
    // let link = this.linksGroup
    //   .attr("class", "links")
    //   .selectAll("line")
    //   .data(defaultData.links);
    // link.exit().remove();
    // link = link
    //   .enter()
    //   .append("line")
    //   .attr("stroke-width", function(d) {
    //     return Math.sqrt(d.value);
    //   })
    //   .merge(link);

    // let node = this.nodesGroup
    //   .attr("class", "nodes")
    //   .selectAll("circle")
    //   .data(defaultData.nodes);
    // node.exit().remove();
    // node = node
    //   .enter()
    //   .append("circle")
    //   .attr("r", d => (d.id === "id1" ? 24 : 16))
    //   .attr("fill", d => {
    //     return this.color(d.group);
    //   })
    //   .call(
    //     d3.drag().on("start", this.dragstarted).on("drag", this.dragged).on("end", this.dragended)
    //   )
    //   .merge(node);

    // this.simulation.nodes(defaultData.nodes).on("tick", ticked);

    // this.simulation
    //   .force("link")
    //   .links(defaultData.links)
    //   .distance(100);

    // this.simulation.alpha(1).restart();

    // function ticked() {
    //   link
    //     .attr("stroke", "#c7c7c7")
    //     .attr("x1", d => d.source.x)
    //     .attr("y1", d => d.source.y)
    //     .attr("x2", d => d.target.x)
    //     .attr("y2", d => d.target.y);

    //   node.attr("cx", d => d.x).attr("cy", d => d.y);
    // }
  }
  handleAddNode() {}
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
