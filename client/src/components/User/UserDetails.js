import React, { Component } from 'react';
import { updateUser } from '../../actions/userAction'
import { connect } from 'react-redux';
import history from '../../history'

class CreatUser extends Component {

    constructor(props) {
        super(props);
        const location = history.location
        this.state = location.state;

        this.handleChangeFor = this.handleChangeFor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFor = (propertyName) => (event) => {
        const { user } = this.state;
        const userDetails = {
            ...user,
            [propertyName]: event.target.value
        };
        this.setState({ user: userDetails });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("user to be savedis ", this.state.user)
        this.props.updateUser(this.state.user);
    }


    render() {
        return (
            <div className="container">
	      	<div className="col-lg-12">
	      	    <form onSubmit={this.handleSubmit}>
			            <div className="form-group">
			              <label htmlFor="usreName">User Name</label>
			              <input
			                type="text"
			                className="form-control"
			                id="usreName"
			                autoComplete="off"
			                onChange={this.handleChangeFor('usreName')} value={this.state.user.usreName}
			                />
			            </div>
			            <div className="form-group">
			              <label htmlFor="userAge"> User Age </label>
			              <input
			                type="text"
			                className="form-control"
			                id="userAge"
			                autoComplete="off"
			                onChange={this.handleChangeFor('userAge')} value={this.state.user.userAge}
			                />
			            </div>
			             <div className="form-group">
			              <label htmlFor="userSalary">Last Name</label>
			              <input
			                type="text"
			                className="form-control"
			                id="userSalary"
			                autoComplete="off"
			                onChange={this.handleChangeFor('userSalary')} value={this.state.user.userSalary}
			                />
			            </div>
			           		 <button type="submit" className="btn btn-success btn-lg">
			              SAVE
			            </button>
			    </form>
		    </div>
	        </div>
        )
    }
}


const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    updateUser: (data) => dispatch(updateUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatUser);