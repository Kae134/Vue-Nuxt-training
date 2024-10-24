export default defineEventHandler(async (event) => {

    const real_db = [{ token: "TOKEN", username: "testwithoutdb" }];

    try {
        const body = await readBody(event);

        console.log(body)

        if (!body.token) {
            return { success: false, error: "Token is required" };
        }

        const user = real_db.find((user) => user.token === body.token);

        

        if (user) {
            return { success: true, data: { login: true, username: user.username } };
        } else {
            return { success: false, error: "Invalid token" }; 
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        return { success: false, error: "Internal server error" };
    }
});