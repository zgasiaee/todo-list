import React from 'react';

//style
import styles from '../styles/Style.module.css'

const TodoList = ({value , setFinalSearch , finalSearch }) => {

    const deleteHandler = () => {
        setFinalSearch(finalSearch.filter(element => element.id !== value.id))
    }

    const checkHandler = () => {
        setFinalSearch(finalSearch.map( item => {
            if(item.id === value.id){
               return {
                ...item , checked : !item.checked 
               }
            }
            return item;
        }))
    }

    return (
        <div className={styles.list}>
            <input type='text' readOnly className={value.checked ? styles.line : styles.input} value={value.text} />
            <button className={styles.checkButton} type='submit' onClick={checkHandler}>
                <i className='fa fa-check'></i>
            </button>
            <button className={styles.removeButton} type='submit' onClick={deleteHandler}>
                <i className='fa fa-trash'></i>
            </button>
        </div>
    );
};

export default TodoList;