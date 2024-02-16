import { useUserData } from '../components/Fetch'
import Model from '../services/model'

export const FirstName = ({userId}) => {
    const data = useUserData(userId, "")

    let firstName
    if (data && data.data && data.data.userInfos) {
        firstName = Model(data, "firstName")
    }
    else {
        firstName = "..."
    }
    return firstName
}


export default FirstName