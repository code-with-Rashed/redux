import { useState } from 'react'
import Frame from '../assets/Frame.svg'
import Vector1 from '../assets/vector-1.svg'
import Vector2 from '../assets/vector-2.svg'
import Vector3 from '../assets/vector-3.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addNewBooking } from '../redux/booking/actions'
const TOTALBOOKEDRULES = 3;

const DestinationForm = () => {
    const dispatch = useDispatch();
    const totalBooked = useSelector(state => state.bookings.length);

    const [formData, setFormData] = useState({
        from: "",
        to: "",
        date: "",
        guests: "",
        ticketclassName: ""
    });

    const bookingInfo = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const bookNow = (e) => {
        e.preventDefault();
        if (totalBooked < TOTALBOOKEDRULES) {
            dispatch(addNewBooking(formData));
        } else {
            alert("Only 3 booking accept at a time.")
        }
    }

    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="first-hero lws-inputform" onSubmit={bookNow}>
                    {/* From  */}
                    <div className="des-from">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <img src={Frame} alt="" />
                            <select onChange={bookingInfo} className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/*  To  */}
                    <div className="des-from">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <img src={Frame} alt="" />
                            <select onChange={bookingInfo} className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/*  Date  */}
                    <div className="des-from">
                        <p>Journey Date</p>
                        <input type="date" onChange={bookingInfo} className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
                    </div>

                    {/*  Guests  */}
                    <div className="des-from">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <img src={Vector1} alt="" />
                            <select onChange={bookingInfo} className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                                <option value="" hidden>Please Select</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>

                    {/*  className  */}
                    <div className="des-from !border-r-0">
                        <p>className</p>
                        <div className="flex flex-row">
                            <img src={Vector3} alt="" />
                            <select onChange={bookingInfo} className="outline-none px-2 py-2 w-full" name="ticketclassName" id="lws-ticketclassName" required>
                                <option value="" hidden>Please Select</option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>

                    <button className="addCity" type="submit" id="lws-addCity">
                        <img src={Vector2} alt="" />
                        <span className="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>
    )
}
export default DestinationForm