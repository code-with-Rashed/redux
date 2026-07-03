import { Provider } from "react-redux";
import BookingList from "./components/BookingList";
import DestinationForm from "./components/DestinationForm";
import Header from "./components/Header";
import store from "./redux/store";

const FlightBookingApp = () => {
    return (
        <Provider store={store}>
            <Header></Header>
            <DestinationForm></DestinationForm>
            <BookingList></BookingList>
        </Provider>
    )
}
export default FlightBookingApp;