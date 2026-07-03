import { useSelector } from "react-redux";
import Booking from "./Booking"

const BookingList = () => {
    const bookedInfo = useSelector(state => state.bookings);
    return (
        <div className="table-container">
            {bookedInfo.length &&
                <table className="booking-table">
                    <thead className="bg-gray-100/50">
                        <tr className="text-black text-left">
                            <th>Destination From</th>
                            <th>Destination To</th>
                            <th className="text-center">Journey Date</th>
                            <th className="text-center">Guests</th>
                            <th className="text-center">className</th>
                            <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                        {bookedInfo.map((info, index) => <Booking info={info} rowIndex={index} key={index}></Booking>)}
                    </tbody>
                </table>
            }
        </div >
    )
}
export default BookingList;