import { useEffect, useState } from "react";

const ServicesApi = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('/servicesData.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return {services};
};

export default ServicesApi;