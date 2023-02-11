import Cookies from "js-cookie";
import { useRouter } from "next/router";



export default function PrivateRoute({ children }) {

    const  isAuth  = Cookies.get("jwt")
    const router = useRouter()
    

    if (!isAuth) {
        alert("You Need To Login First")
        return router.push("/login");

  
    }

    return children;
}
