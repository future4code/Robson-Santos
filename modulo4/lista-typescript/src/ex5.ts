type user = {
    name: string,
    email: string,
    role: string
}

const arrayDeRoles: user[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

const admin = arrayDeRoles.filter((role) => {
    return role.role === 'admin'
})

const emailAdmin = admin.map((email) => {
    return email.email
})

console.log(emailAdmin)