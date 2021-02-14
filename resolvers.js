// @ts-check
import { nanoid } from "nanoid";

class Course {
    /**
     * @param {number|string} id 
     * @param {Object} param1
     * @param {string} param1.name 
     * @param {string} param1.category 
     * @param {string} param1.language 
     * @param {string} param1.email 
     * @param {("WEB"|"MOBILE"|"OTHER")} param1.stack 
     * @param {number} param1.price 
     * @param {{
     * firstName: string
     * lastName?: string
     * experience: number
     * }[]} param1.teachingAssists 
     */
    constructor(id, {
        name, category, price, language, email, stack, teachingAssists
    }) {
        this.id = id
        this.name = name
        this.category = category
        this.price = price
        this.language = language
        this.email = email
        this.stack = stack
        this.teachingAssists = teachingAssists
    }
}

/**
 * @type [Course]
 */
const Courses = [{
    id: 1,
    name: "Mind Manipulation",
    category: "Brain",
    email: null,
    language: "Hinglish",
    price: 0,
    stack: "OTHER",
    teachingAssists: [{
        firstName: "Dhruv",
        experience: 1000,
    }]
}]

const resolvers = {
    Course: ({ id }) => {
        return Courses.find(course => course.id == id)
    },
    allCourses: ({ limit = 10 }) => {
        return Courses.slice(0, limit)
    },

    /**
     * Create Course
     * @param {Object} param0 
     */
    createCourse: ({ input }) => {
        let id = nanoid()
        let course = new Course(id, input)
        Courses.push(course)
        return course
    }
}
export default resolvers