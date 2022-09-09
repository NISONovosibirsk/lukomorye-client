import {  useFormContext } from "react-hook-form";

interface Props {
    children: any;
}

const ConnectForm: React.FC<Props> = ({children}) => {

    const methods = useFormContext()

    return children({...methods})
}

export default ConnectForm;