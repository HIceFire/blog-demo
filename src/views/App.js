import React, { Component } from 'react';
import Select from '../components/Select'
const Option = Select.Option


const datas = [
  {value: 1, label: '北京'},
  {value: 2, label: '上海'},
  {value: 3, label: '广州'},
  {value: 4, label: '深圳'},
  {value: 5, label: '草场地'},
]

/**
 * 1. 父级overflow auto
 * 2. 父级overflow hidden
 * 3. 兄弟节点层级高
 */

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app">
        <h1>Select 组件示例</h1>
        <div className="demos">
          <div className="demo demo-1">
            <h4 className="demo-title">父节点oveflow auto</h4>
            <Select>
              {datas.map(({value, label}) => (
                <Option key={label} value={value} >{label}</Option>
              ))}
            </Select>
          </div>
          <div className="demo demo-2">
            <h4 className="demo-title">父节点oveflow hidden</h4>
            <Select>
              {datas.map(({value, label}) => (
                <Option key={label} value={value} >{label}</Option>
              ))}
            </Select>
          </div>
          <div className="demo demo-3">
            <h4 className="demo-title">父节点的层级较低</h4>
            <div className="demo-3-selectwrapper">
              <Select>
                {datas.map(({value, label}) => (
                  <Option key={label} value={value} >{label}</Option>
                ))}
              </Select>
            </div>
            <span className="demo-3-position">遮不住我</span>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
