import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    return(
        <div>
            <h1>Oops!!!</h1>
            <h5>Error 404 </h5>
            <h6>
                {err.status}:{err.statusText}
            </h6>

        </div>
    )
}

export default Error