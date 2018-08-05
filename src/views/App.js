import React from 'react'
import { Link } from 'react-router-dom'


const DOMAIN = '//www.vq0599.com'
const data = [
  {title: '论如何实现一个完成的组件', address: '/article/2018/0513.html', router: '/select_180513'},
  {title: 'React项目中Modal组件设计思想', address: '/article/2018/0805.html', router: '/modal_180805'},
]

export default () => (
  <div>
    <h1>一些用于博客中的示例代码~~</h1>
    <table>
      <thead>
        <tr>
          <th>标题</th>
          <th>博客地址</th>
          <th>代码地址</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(({title, address, router}, i) => (
            <tr key={i}>
              <td>{title}</td>
              <td><a href={`${DOMAIN}${address}`} target="_blank">戳我</a></td>
              <td><Link to={router}>戳我</Link></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)