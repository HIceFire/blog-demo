import React from 'react'
import Draggable, {DraggableCore} from 'react-draggable'


export default class UnControlledDemo extends React.Component {
  render() {
    return (
      <Draggable>
        <div>Hello world</div>
      </Draggable>
    )
  }
}

class ControlledDemo extends React.Component {
  state = {
    position: {x: 0, y: 0}
  }

  handleChange = (ev, v) => {
    const {x, y} = this.state.position
    const position = {
      x: x + v.deltaX,
      y: y + v.deltaY,
    }

    this.setState({position})
  }

  render() {

    const {x, y} = this.state.position
    return (
      <DraggableCore
        onDrag={this.handleChange}
        position={this.state.position}
      >
        <div style={{transform: `translate(${x}px, ${y}px)`}}>
          Hello world
        </div>
      </DraggableCore>
    );
  }
}