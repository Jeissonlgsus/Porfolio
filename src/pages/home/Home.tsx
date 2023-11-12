import Home from "../../components/home/index"
import WithLoading from "../Loading"

const HomePage = () => {
    
    return(
        <WithLoading>
            <Home/>
        </WithLoading>
    )
}
export default HomePage