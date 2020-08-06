import store from "store";

export default () => {
    let user = store.get(`user`)
    if (user.loggedIn){
        return false;
    }
};