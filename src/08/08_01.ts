type UserType = {
    [key: string]: { id: number, name: string }
}

export const users: UserType = {
    '101': {id: 101, name: 'Dimych'},
    '1231': {id: 1231, name: 'Natasha'},
    '1045': {id: 1045, name: 'Valera'},
    '12345': {id: 12345, name: 'Vitali'},
}

let user = {id: 100500, name: 'Igor'}
users[user.id] = user;
delete users[user.id]
users[user.id].name = 'Vitya'