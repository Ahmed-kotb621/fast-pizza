import { useSelector } from "react-redux";

function UserName(){
    const username = useSelector(state=>state.user.username);
    if(!username) return null;
    return <div className="hidden font-semibold text-sm md:block">{username}</div>
}

export default UserName;