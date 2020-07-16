import * as actionType from '../Actions/student';


const initialState = {
    student: []
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_STUDENTS:
            return {
                ...state,
                ...{
                    student:action.payload
                }
            }
        default:
            return state
    }
}

export default studentReducer