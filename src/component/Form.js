import React, { useState } from 'react'

//style
import styles from '../styles/Style.module.css'

//component
import TodoList from './TodoList'

const Form = () => {
  const [value, setValue] = useState('')
  const [finalSearch, setFinalSearch] = useState([])
  const [filter, setFilter] = useState('all')

  const changeHandler = (event) => {
     setValue(event.target.value)
  }

  const setToList = (event) => {
    event.preventDefault()
    setFinalSearch([
      ...finalSearch,
      { text: value, id: Math.random() * 1000, checked: false },
    ])
    setValue('')
  }

  const filterStatus = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
      <header>
         <h1>Todo List</h1>
      </header>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
        <input
          type="text"
          value={value}
          onChange={changeHandler}
          className={styles.input}
        />
        <button type="submit" className={styles.button} onClick={setToList}>
          <i className="fa fa-plus"></i>
        </button>
        </div>
        <div className={styles.select}>
          <select
            name="filter"
            className={styles.filterSelect}
            onChange={filterStatus}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>

      {finalSearch &&
        (filter === 'completed'
          ? finalSearch
              .filter((item) => item.checked !== false)
              .map((item) => (
                <TodoList
                  value={item}
                  key={item.id}
                  setFinalSearch={setFinalSearch}
                  finalSearch={finalSearch}
                />
              ))
          : filter === 'uncompleted'
          ? finalSearch
              .filter((item) => item.checked !== true)
              .map((item) => (
                <TodoList
                  value={item}
                  key={item.id}
                  setFinalSearch={setFinalSearch}
                  finalSearch={finalSearch}
                />
              ))
          : finalSearch.map((item) => (
              <TodoList
                value={item}
                key={item.id}
                setFinalSearch={setFinalSearch}
                finalSearch={finalSearch}
              />
            )))}
    </>
  )
}

export default Form
