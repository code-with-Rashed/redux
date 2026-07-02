import rootReducer from "../rootReducer";

const myLogger = (store) => (next) => (action) => {
    console.clear();
    console.log(`Action ${JSON.stringify(action)}`);
    console.log(`Before ${JSON.stringify(store.getState())}`);

    let actionProccid = next(action);

    const upcominState = [next].reduce(rootReducer, store.getState());
    console.log(`upcominState ${JSON.stringify(upcominState)}`);

    return actionProccid;
}
export default myLogger;