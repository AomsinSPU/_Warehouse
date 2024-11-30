const users = [
    {   user: 'user', 
        pass: 'pass', 
        role: 'user', 
        token: 'user',
        name: 'คุณธารา บัณฑิตย์'
    },
    {
        user: 'admin', 
        pass: 'admin', 
        role: 'admin', 
        token: 'admin',
        name: 'คุณพงษ์อนันต์ จีรสมบัติ'
    },
    {
        user: 'superadmin', 
        pass: 'superadmin', 
        role: 'superadmin', 
        token: 'superadmin',
        name: 'คุณญภา คมมาก'
    }
]

export function verifyUser( user , pass) {
    const userFound = users.find( (u) => {
        return u.user === user && u.pass === pass
    } )

    return userFound ? { role: userFound.role, token: userFound.token } : null
}  