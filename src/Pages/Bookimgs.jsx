import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import BookimgRow from "./BookimgRow";
// import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Bookimgs = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure()

    // const url = `https://car-doctor-server-beta-ebon.vercel.app/bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
        // axios.get(url, {withCredentials:true})
        // .then(res =>{
        //     setBookings(res.data)
        // })
        axiosSecure.get(url)
        .then(res => setBookings(res.data))
    }, [url, axiosSecure])

    
    const handleDelete = id =>{
        const procced = confirm('Are you sure you want to delete')
        if(procced){
            fetch( `https://car-doctor-server-beta-ebon.vercel.app/bookings/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                // console.log(data)
                if(data.deletedCount > 0){
                    alert('Deleted Successful')
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                }
            })
        }
    }

    const handleBookingConfirm = id =>{
        fetch( `https://car-doctor-server-beta-ebon.vercel.app/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.modifiedCount > 0){
                // Update State
            const remaining = bookings.filter(booking => booking._id !== id)
            const update = bookings.find(booking => booking._id === id)    
            update.status = 'confirm'
            const newBookings = [update, ...remaining];
            setBookings(newBookings);
            }
        })
    }

    return (
        <div>
            <h2 className="text-5xl font-bold">Your Bookings: {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service Name</th>
                            <th>Service</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        bookings.map(booking => <BookimgRow 
                        key={booking._id}
                         booking={booking} handleDelete={handleDelete}
                         handleBookingConfirm={handleBookingConfirm}
                         >

                        </BookimgRow> )
                       }
                      
                        
                    </tbody>
                   

                </table>
            </div>

        </div>
    );
};

export default Bookimgs;