import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from "../redux/counter/actions"
const HookCounter = () => {
    const count = useSelector(state => {
        return state.counter.value
    });
    const dispatch = useDispatch();
    const incrementHandler = () => {
        dispatch(increment());
    }
    const decrementHandler = () => {
        dispatch(decrement());
    }
    return (
        < div className="max-w-md mx-auto mt-10 space-y-5" >
            <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <div className="text-2xl font-semibold" id="counter">{count}</div>
                <div className="flex space-x-3">
                    <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow cursor-pointer" onClick={incrementHandler}>
                        Increment
                    </button>
                    <button className="bg-red-400 text-white px-3 py-2 rounded shadow cursor-pointer" onClick={decrementHandler}>
                        Decrement
                    </button>
                </div>
            </div>
        </div >
    )
}
export default HookCounter;