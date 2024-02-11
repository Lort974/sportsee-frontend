import { useMainData } from '../components/Fetch'


export const FirstName = ({userId}) => {
    const data = useMainData(userId)

    let firstName
    if (data && data.data && data.data.userInfos) {
        firstName = data.data.userInfos.firstName
    }
    else {
        firstName = "..."
    }
    return firstName
}


export default FirstName