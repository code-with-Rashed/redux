import { useDispatch } from 'react-redux';
import Remove from '../assets/remove.svg'
import { deleteBooking } from '../redux/booking/actions';

const Booking = ({ info, rowIndex }) => {
    const dispatch = useDispatch();
    const handleDeleteBooking = (id) => {
        dispatch(deleteBooking(id));
    }

    return (
        <tr className="lws-bookedTable text-black">
            <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                    <p className="lws-bookedFrom">{info.from}</p>
                </div>
            </td>
            <td className="px-6 py-4">
                <p className="lws-bookedTo">{info.to}</p>
            </td>
            <td className="px-6 py-4 text-center">
                <p className="lws-bookedDate">{info.date}</p>
            </td>
            <td className="px-6 py-4 text-center">
                <p className="lws-bookedGustes">{info.guests}</p>
            </td>
            <td className="px-6 py-4 text-center">
                <span className="lws-bookedclassName"> {info.ticketclassName} </span>
            </td>
            <td className="px-6 py-4 text-center">
                <div className="flex justify-center gap-4">
                    <button className="lws-remove" onClick={() => handleDeleteBooking(rowIndex)}>
                        <img src={Remove} alt="" />
                    </button>
                </div>
            </td>
        </tr>
    )
}
export default Booking;