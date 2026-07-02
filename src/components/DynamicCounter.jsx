import { connect } from "react-redux"
import { decrement, increment } from "../redux/counter/actions"
import { decrement as dynamicDecrement, increment as dynamicIncrement } from "../redux/dynamicCounter/actions"

const DynamicCounter = ({ count, increment, decrement, dynamic }) => {
    return (
        < div className="max-w-md mx-auto mt-10 space-y-5" >
            <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <div className="text-2xl font-semibold" id="counter">{count}</div>
                <div className="flex space-x-3">
                    <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow cursor-pointer" onClick={() => dynamic ? increment(6) : increment()}>
                        Increment
                    </button>
                    <button className="bg-red-400 text-white px-3 py-2 rounded shadow cursor-pointer" onClick={() => dynamic ? decrement(3) : decrement()} >
                        Decrement
                    </button>
                </div>
            </div>
        </div >
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: (value) => ownProps.dynamic ? dispatch(dynamicIncrement(value)) : dispatch(increment()),
        decrement: (value) => ownProps.dynamic ? dispatch(dynamicDecrement(value)) : dispatch(decrement())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DynamicCounter);