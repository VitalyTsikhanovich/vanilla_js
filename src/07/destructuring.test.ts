 // type ManType = {
 //    name: string
 //    age: number
 //    lessons: Array<{ title: string }>
 //    address: {
 //        street: {
 //            title: string
 //        }
 //    }
// }

import {ManType} from "./destructuring";

let props: ManType;
beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})


test.skip("", () => {


    const {age, lessons} = props

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);

})

test("g", () => {

    const [ls1, ls2] = props.lessons;

    expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")
})