import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    list: []
  }
  //创建ref，这样就能很方便拿到input的值
  myRef = React.createRef()

  handleAdd = () => {
    //此处不能直接对state.list进行更改，需要新定义一个数组，浅拷贝
    let newList = [...this.state.list]

    //获取input的值
    if (this.myRef.current.value) {
      let newItem = {
        id: Math.random() * 1000000, //一般该值由后端给出，此处使用随机定义
        content: this.myRef.current.value
      }
      newList.push(newItem)
      this.setState({
        list: newList
      })

      //添加后将输入框清空
      this.myRef.current.value = ''
    }

  }

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
        <input ref={this.myRef} />
        <button onClick={() => this.handleAdd()}>添加</button>
        <ul>
          {
            this.state.list.map((item, index) => <li key={item.id}>
              {item.content}
              <button onClick={() => this.handleDelete(index)}>删除</button>
            </li>)
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