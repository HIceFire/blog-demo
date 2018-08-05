import React from 'react'
/*
 * defaultValue
 * onChange
 * placeholder
 * children
 * disabled
 * style
 */


export default class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState(props)
  }

  initialState(props) {
    const mode = 'value' in props ? 'Controlled' : 'Uncontrolled'
    const state = {
      mode,
      showDropMenu: false,
    }

    if (mode === 'Uncontrolled') {
      state.activeValue = props.defaultValue
    }

    return state
  }

  addEventCancelDropDown = ev => {
    if (this.props.disabled) {
      return
    }

    if (this.state.showDropMenu) {
      if (this.refs.dropMenu.contains(ev.target) === false) {
        this.setState({showDropMenu: false})
      }
    }
  }

  addEventToggleDropDown = () => {
    if (this.props.disabled) {
      return
    }

    if (!this.state.showDropMenu) {
      this.setState({showDropMenu: true})
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.addEventCancelDropDown, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.addEventCancelDropDown, true)
  }

  getSelectedText() {
    const value = this.state.mode === 'Controlled' ? this.props.value : this.state.activeValue
    const target = this.props.children
      .filter(child => child.props.value === value)[0]

    return target
      ? target.props.children
      : this.props.placeholder || '请选择'
  }

  onChangeHandle = value => {
    const currentValue = this.state.mode === 'Controlled' ? this.props.value : this.state.activeValue
    if (value === currentValue) {
      this.setState({showDropMenu: false})
      return
    }

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value)
    }

    if (this.state.mode === 'Uncontrolled') {
      this.setState({activeValue: value})
    }

    this.setState({showDropMenu: false})
  }

  render() {
    return (
      <div className="select" style={this.props.style}>
        <div className="select-selection"
          onClick={this.addEventToggleDropDown} >
          <input
            disabled
            className="select-selection-input"
            value={this.getSelectedText()}
          />
          <span className="select-selection-btn"></span>
        </div>
        {
          !this.props.disabled &&
          <ul
            ref="dropMenu"
            className="select-dropMenu"
            style={{display: this.state.showDropMenu ? '' : 'none'}}
          >
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {
                  onChange: () => {
                    if (!child.props.disabled && !child.props.selected) {
                      this.onChangeHandle(child.props.value)
                    }
                  }
                })
              })
            }
            {
              (!this.props.children || this.props.children.length === 0) &&
              <li onClick={() => { this.setState({showDropMenu: false}) }}>无匹配结果</li>
            }
          </ul>
        }
      </div>
    )
  }
}

class Option extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { disabled, selected } = this.props

    let clsName = ''
    if (disabled) {
      clsName = 'opt disabled'
    }
    if (selected) {
      clsName = 'opt selected'
    }

    return (
      <li className={clsName} onClick={this.props.onChange}>{this.props.children}</li>
    )
  }
}

Select.Option = Option