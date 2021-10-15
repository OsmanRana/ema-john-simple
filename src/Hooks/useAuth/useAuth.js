import { useContext } from "react"
import { AuthContext } from "../../context/Context/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;