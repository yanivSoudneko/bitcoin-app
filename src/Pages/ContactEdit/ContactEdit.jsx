
import { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ContactService } from '../../Services/ContactService.js'
import { saveContact } from '../../store/actions/contactActions'
import back from '../../assets/logos/back.png';


import './ContactEdit.scss'

 class _ContactEdit extends Component {

    state = {
        contact: null,
        errMsg: ''
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        try {
            const contact = id ? await ContactService.getContactById(id) : ContactService.getEmptyContact()
            this.setState({ contact })
        } catch (err) {
            this.setState({ errMsg: 'Contact not Found' })
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        await this.props.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }

    render() {
        if (!this.state.contact) return <div>{this.state.errMsg || 'Loading'}</div>
        const { name, phone, email } = this.state.contact
        return (
            <section className="contact-edit-section">
                            <NavLink exact to="/contact" activeClassName="active-nav"><img src={back} alt=''/></NavLink>
            <form className='contact-edit' onSubmit={this.onSaveContact}>
                <label htmlFor="name">By name</label>
                <input required type="text" id="name" name="name" value={name} onChange={this.handleChange} />
                <label htmlFor="email">By mail</label>
                <input required type="text" id="email" name="email" value={email} onChange={this.handleChange} />
                <label htmlFor="number">By number</label>
                <input required type="text" id="number" value={phone} name="phone" onChange={this.handleChange} />

                <p>{this.state.errMsg}</p>
                <button>Save Contact</button>
            </form>
            </section>
        )
    }
}

const mapDispatchToProps = {
    saveContact
}

export const ContactEdit = connect(null, mapDispatchToProps)(_ContactEdit)