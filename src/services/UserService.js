export async function getAllUsers() {

    const response = await fetch('/api/users');
    return await response.json();
}
export async function getAllUserscommit() {

    const response = await fetch('/api/msgs');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}
export async function commit(data) {
    const response = await fetch(`/api/msg`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({msg: data})
      })
    return await response.json();
}
export async function forcheck(data) {
    const response = await fetch(`/api/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({login: data})
      })
    return await response.json();
}