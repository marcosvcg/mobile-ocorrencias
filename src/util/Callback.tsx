import { useLocation, useNavigate } from "react-router-dom";
import { validarToken } from "../service/apiSSO";
import { useEffect } from "react";

function Callback() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const code = queryParams.get('code');

        if (!code) {
            navigate('/');
            return;
        }

        const validar = async () => {
            await validarToken(code);
            navigate('/');
        };

        validar();
    }, []);

    return (
        <></>
    )
}

export default Callback;