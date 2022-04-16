import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    list: [],
    value: ''
  }

  handleAdd = () => {
    //此处不能直接对state.list进行更改，需要新定义一个数组，浅拷贝
    let newList = [...this.state.list]

    //获取input的值
    if (this.state.value) {
      let newItem = {
        id: Math.random() * 1000000, //一般该值由后端给出，此处使用随机定义
        content: this.state.value,
        checked: false
      }
      newList.push(newItem)
      this.setState({
        list: newList
      })

      //添加后将输入框清空
      this.setState({ value: '' })
    }

  }

  // 选中待办事项
  handleCheck = index => {
    let newList = [...this.state.list]
    newList[index].checked = !newList[index].checked
    this.setState({
      list: newList
    })
  }

  // 删除待办事项
  handleDelete = index => {
    let newList = this.state.list.slice()
    //删除数组index处的一个元素
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => {
            this.setState({
              value: e.target.value
            })
          }}
        />
        <button onClick={() => this.handleAdd()}>添加</button>
        <ul>
          {
            this.state.list.map((item, index) =>
              <li key={item.id} style={item.checked ? { 'text-decoration': 'line-through' } : null}>
                <input type='checkbox' checked={item.checked} onClick={() => this.handleCheck(index)} />
                {item.content}
                <button
                  onClick={() => this.handleDelete(index)}>删除
                </button>
              </li>
            )
          }
        </ul>

        {/* 如果没有待办事项则显示 */}
        {
          this.state.list.length === 0 && <div>暂无待办事项</div>
        }
      </div>
    );
  }
}

export default TodoList;