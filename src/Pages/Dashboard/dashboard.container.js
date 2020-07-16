
import { connect } from 'react-redux'
import { searchStudent} from './action'
import Dashboard from "./dashboard.component"



const mapStateToProps = state => ({
    students:state.student.student
});

const mapDispatchToProps = {
    searchStudent

}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)