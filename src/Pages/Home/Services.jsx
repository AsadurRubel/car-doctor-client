import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])


    return (
        <div>
            <div className="text-center space-y-4 mt-10">
                <h3 className="text-2xl text-orange-500"> Services</h3>
                <h3 className="text-5xl font-bold"> Our Service Area</h3>
                <p className="w-3/5 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-3 gap-10">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;