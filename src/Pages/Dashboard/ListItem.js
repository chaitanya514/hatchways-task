import React,{useState} from "react"
import "./Style.css"
import Tag from "./Tag"



const ListItem = (props) => {
    const students = Array.from(props.students)
    const avg = (grades) => {
        const sum = grades.reduce((a, b) => Number(a) + Number(b));
        const result = sum / grades.length;
        return result;
    }


    const listItems = students.map((student) =>
        <div key={student.id}>
            <div className="profile-container">
                <img className="profile-pic" src={student.pic} />
            </div>
            <div className="info-container">
                <h1 className="name">{`${student.firstName} ${student.lastName}`}</h1>
                <p>Email:{student.email}</p>
                <p>Company:{student.company}</p>
                <p>Skill:{student.skill}</p>
                <p>Average:{avg(student.grades)}%</p>
                <Tag />
           </div>
            
            <hr />
        </div>
        


    )
    return (
        <div>
            <h3>ListView</h3>
            {listItems}
        </div>
    )

}
export default ListItem