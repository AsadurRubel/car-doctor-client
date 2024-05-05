import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const CheckOut = () => {

    const service = useLoaderData();
    console.log(service)
    const { title, _id, price, img } = service;
    const {user} = useContext(AuthContext)


    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email= user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking)
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert('Data Added Successfullt')
            }
        })
     
    }


    return (
        <div>
            <h1 className="text-center text-3xl font-bold">CheckOut Book Service: {title} </h1>

            <form onSubmit={handleBookService} className="card-body">
                <div className="grid grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" 
                        defaultValue={user?.displayName}
                        placeholder="name"
                        name="name"
                        className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" 
                        name="date"
                        className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" 
                        defaultValue={user?.email}
                        placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text"
                         defaultValue={'$ '+price} 

                         className="input input-bordered" required />

                    </div>
                </div>
                <div className="mt-5 border rounded-xl p-2">
                    <textarea className="w-full" name="" id="" cols="30" rows="5" placeholder="Your Message"></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;