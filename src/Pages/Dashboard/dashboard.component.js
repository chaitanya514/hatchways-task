import React, { useEffect, useState } from "react"
import ListItem from "./ListItem"
function Dashboard(props) {
    const [students, setStudents] = useState([]);
    const[name,setName]=useState('');

   
    useEffect(() => {
        
            if (students.length === 0 && name ==="") {
                props.searchStudent()
                setStudents(props.students)
            }

        
    });
    if (students.length === 0 && name === "" && props.students !== students) {
        setStudents(props.students)
    }
      const  handleChange=(e)=>{
            const name = e.target.value
            setName(name)
            handleFilter(name)
        } 

        const search = (student, filterValue) => {
            if (student.firstName.includes(filterValue) || student.firstName.toLowerCase().includes(filterValue)) {
                return student;
            }
        }
    
        const handleFilter = (filterValue) => {
            
            const result = props.students.filter((student) => (
                search(student, filterValue)
            ));
            setStudents(result)
    
        }

    console.log("student", students)
    return (
        <div>
            <input type="text" placeholder="Search By Name" value={name} onChange={(e)=>handleChange(e)}/>
           <ListItem students={students}/>
           
        </div>

    )
}

export default Dashboard;