import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


// 用于渲染的中间函数，创建一个destroy传递给Alert组件
function uncontrolledProtal (config) {
  const $div = document.createElement('div')
  document.body.appendChild($div)
  function destroy() {
    const unmountResult = ReactDOM.unmountComponentAtNode($div)
    if (unmountResult && $div.parentNode) {
      $div.parentNode.removeChild($div)
    }
  }
  ReactDOM.render(<Alert destroy={destroy} {...config} />, $div)
  return { destroy, config }
}


// Alert UI组件，将destroy绑定到需要触发的地方
class Alert extends React.Component {
  static propsType = {
    btnText: PropTypes.string,
    destroy: PropTypes.func.isRequired,
  }
   static defaultProps = {
    btnText: '确定',
  }
  render() {
    return (
      <div className="modal-mask">
        <div className="modal-alert">
          {this.props.content}
          <button
            className="modal-alert-btn"
            onClick={this.props.destroy}
          >
            {this.props.btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default class Modal extends React.Component {
  // ...
}

Modal.alert = function (config) {
  return uncontrolledProtal(config)
}