import * as studentApi from "../../API/student"
import * as ActionTypes from '../../Actions/student'

const fetchStudent = (students) => ({
    type: ActionTypes.FETCH_STUDENTS,
    payload: students

})

export const searchStudent = (city) => async (dispatch, getState) => {
    try {
        const { students } = await studentApi.searchStudentApi(city)
        dispatch(fetchStudent(students))
        //   console.log("restaurant",students)
    }
    catch (err) {
        console.log('error', err)

    }
}