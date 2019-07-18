import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../../actions/userAction'
import { connect } from 'react-redux';
import history from "../../history"

class Users extends Component {

    constructor(props) {
        super(props);
        this.viewUser = this.viewUser.bind(this);
    }

    componentDidMount() {
        this.props.getUsers();
    }

    viewUser = (viewUserDetails) => {
        console.log("this.state ", viewUserDetails);
        history.push('/user/view', { 'user': viewUserDetails })
    }

    deleteUser(user) {
        console.log(`delete user `, user);
        this.props.deleteUser(user);
    }

    render() {
        const { users } = this.props.users;
        console.log("customers >>>", users)


        return (<div className="container">
            <div className="col-lg-12">
                  <Link to={`/user/new`} ><button className="btn btn-success pull-right" >New User</button></Link>
            <table className="table table-striped">
            <tbody>
                 {
                    users.map((user,index) =>
                      <tr key={index}>
                        <td>{user.usreName}</td>
                        <td>{user.userAge}</td>
                        <td>{user.userSalary}</td>
                        <td> <i className="fa fa-edit btn btn-info" onClick={() => this.viewUser(user)}> </i>   &nbsp;
                        <i className="fa fa-trash btn btn-danger" onClick={()=>this.deleteUser(user)}> </i></td>
                      </tr>
                    )
                }
            </tbody>
            </table>
            </div>
            </div>)
    }
}


const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getUsers()),
    deleteUser: (user) => dispatch(deleteUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);