// @ts-ignore
type UserType = {
[key: string]: {id: number, name: string}
}

let users: UserType

beforeEach( () => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '1231': {id: 1231, name: 'Natasha'},
        '1045': {id: 1045, name: 'Valera'},
        '1': {id: 1, name: 'Vitali'},
    }
})

test.skip("should update corresponding user", () => {
    users['1'].name = 'Ekaterina'

    expect(users['1'].name).toBe('Ekaterina');
})

test("should delete corresponding user", () => {
    delete users['1']

    expect(users['1']).toBeUndefined();
})