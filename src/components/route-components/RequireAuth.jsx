import { useAuth } from "../../context/AuthContext"
import { UserAuthView } from "../../pages/UserAuthView/UserAuthView";

export const RequireAuth = ({children}) => {
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) {
        return <UserAuthView/>
    }

    return children;
}