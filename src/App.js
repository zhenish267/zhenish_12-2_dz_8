import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {increment, incrementDown} from "./store/countSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersPage from "./pages/usersPage/UsersPage";

function App() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.countReducer)
    const user = useSelector(state => state.usersReducer)

    const incrementFunc = () => {
        dispatch(increment())
    }
    const incrementDownFunc = () => {
        dispatch(incrementDown())
    }

    return (
        <div className="container">
            <ul>
                <li>count: {count}</li>
                <li>name: {user.name}</li>
                <li>age: {user.age}</li>
            </ul>
            <button onClick={incrementFunc}>up</button>
            <button onClick={incrementDownFunc}>down</button>
            <br/>
            --------------------------------------------------------------------------------------------------------------------------------------------------------
            <UsersPage/>
        </div>
    );
}

export default App;
