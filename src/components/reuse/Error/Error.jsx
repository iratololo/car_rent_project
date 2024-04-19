import { useSelector } from "react-redux";
import { Report } from 'notiflix/build/notiflix-report-aio';

import css from "./Error.module.css"
import { globalErrorSelector } from "../../../redux/root/selectors";

export const Error = () => {
    const error = useSelector(globalErrorSelector);
    // const error = '';
    return (
        error ? <div className={css.error}>{Report.failure('Error',`${error}`,'Okay',)}</div> : <></>
    )
}

export default Error;