export default defineEventHandler(async (event) => {

    const real_db = [{ token: "TOKEN", username: "testwithoutdb" }];

    try {
        const cookie = getCookie(event, 'auth-token');
        const user = real_db.find((user) => user.token === cookie);

        if (user) {
            return { success : true, data : user};
        } else {
            return { success : false, data : null};
        };

    }
    catch (error) {
        return { success : false, data : null};
    };

})