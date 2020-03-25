import React, { Component } from "react";
import "./DndSample.css";
interface DndProps {}
interface DndState {
	list: string[];
	dragging: boolean;
	startPageY: number;
	offsetPageY: number;
	draggingIndex: number;
	currentPageY: number;
}

let defaultList: string[] = [];
for (let i = 0; i < 10; i++) {
	defaultList.push(`item --- ${i}`);
}
function move(arr: string[], startIndex: number, toIndex: number): string[] {
	arr = arr.slice();
	arr.splice(toIndex, 0, arr.splice(startIndex, 1)[0]);
	return arr;
}
const lineHeight = 51;
export default class DndSample extends Component<DndProps, DndState> {
	constructor(props: DndProps) {
		super(props);
		this.state = {
			list: defaultList,
			dragging: false,
			startPageY: 0,
			offsetPageY: 0,
			draggingIndex: -1,
			currentPageY: 0
		};
	}
	onMouseDown(event: React.MouseEvent, index: number) {
		this.setState({
			dragging: true,
			startPageY: event.pageY,
			currentPageY: event.pageY,
			draggingIndex: index
		});
	}
	onMouseMove(event: React.MouseEvent) {
		const { startPageY, draggingIndex, list } = this.state;
		let offset = event.pageY - startPageY;
		if (offset > lineHeight && draggingIndex < list.length - 1) {
			offset -= lineHeight;
			this.setState({
				list: move(list, draggingIndex, draggingIndex + 1),
				draggingIndex: draggingIndex + 1,
				startPageY: this.state.startPageY + lineHeight
			});
		} else if (offset < -lineHeight && draggingIndex > 0) {
			offset -= lineHeight;
			this.setState({
				list: move(list, draggingIndex, draggingIndex - 1),
				draggingIndex: draggingIndex - 1,
				startPageY: this.state.startPageY - lineHeight
			});
		}

		this.setState({
			offsetPageY: offset
		});
	}
	onMouseUp(event: React.MouseEvent) {
		this.setState({
			dragging: false,
			startPageY: 0,
			draggingIndex: -1
		});
	}
	getDraggingStyle(index: number) {
		if (index !== this.state.draggingIndex) return {};
		return {
			backgroundColor: "#eee",
			transform: `translate(10px, ${this.state.offsetPageY}px)`,
			opacity: 0.5
		};
	}
	render() {
		const { list, dragging } = this.state;
		return (
			<section className={"dnd"}>
				<header className={"dnd-header"}>拖拽列表</header>
				<section className={"dnd-content"}>
					<ul className={"dnd-content-list"}>
						{list.map((item, index) => {
							return (
								<li
									onMouseDown={event => this.onMouseDown(event, index)}
									className={"dnd-content-item"}
									key={index}
									style={this.getDraggingStyle(index)}
								>
									{item}
								</li>
							);
						})}
					</ul>
					{dragging ? (
						<div
							className="dnd-sample-mask"
							onMouseMove={event => this.onMouseMove(event)}
							onMouseUp={event => this.onMouseUp(event)}
						></div>
					) : (
						""
					)}
				</section>
			</section>
		);
	}
}
