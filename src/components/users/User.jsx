import React from 'react';

const User = (props) => {

    return (
    <ul className='list-group'>
        <li className='list-group-item'>{props.data.name}</li>
        <li className='list-group-item'>{props.data.email}</li>
        <li className='list-group-item'>{props.data.phone}</li>
        <li className='list-group-item'>
          <button className='btn btn-danger' onClick={()=>props.deletehandler(props.data.id)}>delete</button>
        </li>
    </ul>
    );
}

export default User;
