
export default defineEventHandler(async(event) => {
    
    const users = [{username:"testwithoutdb", password:"1234"}]
    
    const body = await readBody(event);

    const userFound = users.find(user => user.username === body.username && user.password === body.password);

    if (userFound) {
        console.log("Username :", body.username);
        console.log("Password :", body.password);
        const token = "TOKEN"
        setCookie(event, 'auth-token', token)
        return { logged: true };
    }

    return { logged : false }

    
})