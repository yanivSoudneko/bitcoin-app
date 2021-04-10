
import { Component } from 'react'
import { connect } from 'react-redux';
import { loadUser, auth } from '../../store/actions/userActions';

import './signup.scss'

class _signup extends Component {

    state = {
        username: ''
    }
    componentDidMount() {
        this.props.loadUser()
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState({ [field]: value })
    }

    onCreateUser = async (ev) => {
        ev.preventDefault()
        await this.props.auth(this.state.username)
        this.props.history.push('/contact')
    }

    render() {
        const { username } = this.state
        console.log(' this.props', this.props);
        return (
            <div>
                <h1>Signup</h1>
                <form className='contact-edit' onSubmit={this.onCreateUser}>
                    <label htmlFor="name">username</label>
                    <input required type="text" id="name" name="username" value={username} onChange={this.handleChange} />
                    <button>Sign up</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    user: state.userReducer.user
})

const mapDispatchToProps = {
    loadUser,
    auth
}

export const signup = connect(mapStateToProps, mapDispatchToProps)(_signup)
