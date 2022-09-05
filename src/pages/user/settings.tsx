import { ReactElement } from "react";
import UserLayout from "../../components/User/UserLayout/UserLayout";

const Settings = () => {

    return (
        <div>SETTINGS</div>
    )
}

Settings.getLayout = function getLayout(page: ReactElement) {
    return(
        <UserLayout>
            {page}
        </UserLayout>
    )
}

export default Settings;