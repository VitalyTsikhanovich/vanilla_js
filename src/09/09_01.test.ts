// function icreaseAge(u: UserType) {
//     u.age++;
// }
//
// type UserType = {
//     name: string
//     age: number
//     address: {title: string}
// }
//
// test("reference type test", () => {
//     let user: UserType  = {
//         name: "Vitali",
//         age: 20,
//         address: {
//             title: "Minsk"
//         }
//     }
//
//     icreaseAge(user);
//
//     expect(user.age).toBe(21)
//
//     const superman = user
//
//     superman.age = 1000;
//
//     expect(user.age).toBe(1000)
//
// })
//
// test("array test", () => {
//     var users  = [
//         {
//             name: "Vitali",
//             age: 20
//         },
//         {
//             name: "Dimych",
//             age: 32
//         }
//     ]
//
//     var admins = users
//
//     admins.push({name: 'Bandit', age: 10})
//
//     expect(users[2]).toEqual({name: 'Bandit', age: 10})
//
// })
//
// /*test("value type test", () => {
//     let usersCount  = 100;
//     let adminsCount = usersCount
//     adminsCount++;
//     expect(users[2]).toEqual({name: 'Bandit', age: 10})
// })*/
//
// test("arr type test", () => {
//     let user: UserType  = {
//         name: "Vitali",
//         age: 20,
//         address: {
//             title: "Minsk"
//         }
//     }
//
//     // let addr = user.address
//
//     let user2: UserType = {
//         name: "Vitali",
//         age: 20,
//         address: user.address
//     }
//
//     user2.address.title = "Kanary";
//
//     expect(user.address).toBe(user2.address)
//     expect(user.address.title).toBe("Kanary")
//
// })