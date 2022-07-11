import React, {useEffect} from 'react';
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getOneUser, getUsers} from "../../store/usersListSlice";

function UsersPage(props) {
    const dispatch = useDispatch()

    const error = useSelector(state => state.usersListReducer.error)
    const users = useSelector(state => state.usersListReducer.users)
    const user = useSelector(state => state.usersListReducer.user)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const getOneUserInfo = (e) => {
        const id = e.target.dataset.id
        dispatch(getOneUser(id))
    }

    return (
        <div>
            {
                error
                    ?
                    <h1>{error}</h1>
                    :
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={getOneUserInfo} data-id={user.id}>Посмотреть</button>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </Table>
            }
            <ul>
                <li>
                    name: {user.name}
                </li>
                <li>
                    username: {user.username}
                </li>
                <li>
                    email: {user.email}
                </li>
            </ul>
        </div>
    );
}

export default UsersPage;