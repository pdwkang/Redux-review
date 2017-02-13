import React, {Component } from 'react'
import { connect } from 'react-redux';
import SelectStudent from '../actions/SelectStudent';
// Bind action creators is a function redux that will trigger
// the action through every single reducer
import { bindActionCreators } from 'redux';
// Container is only a component
class StudentList extends Component{
	// we have access this.props.students, because we brought in 
	// below in mapStateToProps

	render(){
		var studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(
				<li key={index} onClick={()=>this.props.selectStudent(student.name)}>
					{student.name}
				</li>)
			return "blabhlahbklsa"
		})

		// console.log(this.props.students)
		return(
			<div>
				{studentArray}
			</div>
		)
	}
}

// This function will tie together whatever is returned from the reducer
// we call, to this.props. This is the GLUE between the redux state, and
// THIS Component knowing about it
// Another way.. we are going to pick our reducers, and they will be avaiable
// to the component as this.props.namebelow
function mapStateToProps(state){
	return({
		students: state.students
	})
}

function mapDispatchToProps(dispatch){
	// built in redux thing, it expects an object
	return bindActionCreators({
		selectStudent: SelectStudent
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
