import React, { useState } from 'react';

function HooksTodoList(props) {
  const [value, setValue] = useState('')
  const [list, setList] = useState([])

  const handleClick = () => {
    if (value) {
      let newList = [...list]
      const newItem = {
        id: Math.random() * 100000,
        text: value,
        checked: false
      }
      newList.push(newItem)
      setList(newList)
      setValue('')
    }
  }

  const handleDelete = index => {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  const handleCheck = index => {
    let newList = [...list]
    newList[index].checked = !newList[index].checked
    setList(newList)
    console.log(list);
  }
  return (
    <div style={{ marginTop: '50px' }}>
      <input
        style={{ margin: '10px' }}
        value={value}
        onChange={e => { setValue(e.target.value) }}
      />
      <button onClick={handleClick}>添加</button>
      <ul>
        {list.map((item, index) =>
          <li key={item.id} style={item.checked ? { textDecoration: 'line-through' } : null}>
            <input type='checkbox' onChange={() => handleCheck(index)} />
            {item.text}
            <button style={{ margin: '10px' }} onClick={() => handleDelete(index)}>删除</button>
          </li>
        )}
      </ul>
      {
        list.length === 0 ? <div style={{ margin: '10px' }}>暂无待办事项</div> : null
      }
    </div>
  );
}

export default HooksTodoList;