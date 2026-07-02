import Counter from "./components/Counter"
import { Provider } from 'react-redux'
import store from './redux/store'
import HookCounter from "./components/HookCounter"
import DynamicHookCounter from "./components/DynamicHookCounter"
import DynamicCounter from "./components/DynamicCounter"

function CounterApp() {
    return (
        <Provider store={store}>
            <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
                <HookCounter />
                <DynamicHookCounter />
                <hr />
                <Counter />
                <DynamicCounter dynamic={true} />
            </div>
        </Provider>
    )
}

export default CounterApp
