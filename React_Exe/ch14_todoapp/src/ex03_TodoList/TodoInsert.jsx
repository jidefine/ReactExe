import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
    return (
        <from className='TodoInsert'>
            <input placeholder='할 일 입력' />
            <button type='submit'>
                <MdAdd />
            </button>
        </from>
    )
}

export default TodoInsert;