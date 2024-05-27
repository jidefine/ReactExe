import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';

import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo }) => {
    const { text, checked } = todo;
    
    return (
        <div className="TodoListItem">
            {/* cn : div 안에 여러 개의 className을 줄 때 사용 */}
            <div className={cn('checkbox', {checked})}>
                {/* <MdCheckBoxOutlineBlank /> */}
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>

    );
};

export default TodoListItem;