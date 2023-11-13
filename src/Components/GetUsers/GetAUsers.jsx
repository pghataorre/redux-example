import { fetchUserSuccess, fetchUserFail, setLoading } from "../../actionCreators/actionCreators";
import { useDispatch, useSelector } from "react-redux";

const GetUsers = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.loading);
  const users = useSelector((state) => state.users);
  const hasFailed = useSelector((state) => state.apiFail);

  const getUsersApi = async () => {
      dispatch(setLoading());
      dispatch(fetchUserFail(false));

      try {
        const res = await fetch('https://sonplaceholder.typicode.com/users');
        const users = await res.json();

        dispatch(fetchUserSuccess(users));
        dispatch(setLoading());

      } catch(err) {
        console.error('err =====', err);
        dispatch(setLoading());
        dispatch(fetchUserFail(true));
      } 
  }

  return (
    <div className='divider'>
      <h3>Fetches an API adds it to the store using - useSelector() and useDispatch()</h3>
      <button type='button' onClick={getUsersApi}>CALL API TO GET USERS</button>
      <Loader isLoading={isLoading}/>
      <ApiFailed hasFailed={hasFailed} />
      <ul>
        <UsersList users={users}/>      
      </ul>
      
    </div>
  )
}

const Loader = ({isLoading}) => {
  if (!isLoading) return;

  return (
    <>
      <h3>LOADING DATA ... </h3>
    </>
  )
}


const ApiFailed = ({hasFailed}) => {
  if (!hasFailed) return;

  return (
    <>
      <h3>THE API HAS FAILED !</h3>
    </>
  )
}

const UsersList = ({users}) => {
  if (users.length === 0) return;

  const usersList = users.map((item) => (
    <li className='names-list'>
      <p>NAME: {item.name}</p>
      <p>USERNAME: {item.username}</p>
      <p>EMAIL: {item.email}</p>
    </li>
  ))

  return usersList;
} 

export default GetUsers;
