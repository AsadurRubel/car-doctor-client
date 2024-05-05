

const BookimgRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const {_id, img, customerName, email, date, service, price, status } = booking




    return (

        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-square btn-outline btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask rounded w-24 h-24">
                        <img src={img} alt="No Image" />
                    </div>
                </div>

            </td>
            <td>{service}</td>
            <td>
                {customerName}
            </td>
            <td>{email}</td>
            <td>{price}</td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm'? <span className="font-bold text-primary">Confirmed</span> :
                    <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>

    );
};

export default BookimgRow;