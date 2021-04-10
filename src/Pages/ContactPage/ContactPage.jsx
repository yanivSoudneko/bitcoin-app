
import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ContactList } from '../../Cmps/ContactList/ContactList'
import { ContactFilter } from '../../Cmps/ContactFilter';
import { loadContacts, removeContact } from '../../store/actions/contactActions'

import './ContactPage.scss'



class _ContactPage extends Component {

    state = {
        filterBy: null,
    }

    componentDidMount() {
        this.props.loadContacts(this.state.filterBy)
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy },()=> this.props.loadContacts(this.state.filterBy))
    }

    render() {
        const { contacts } = this.props
        return (
            <div className="contactPage">
                <ContactFilter match={this.props.match} onChangeFilter={this.onChangeFilter} />
                <ContactList contacts={contacts} />
                <Link to="/contact/edit">Add Contact</Link>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        contacts: state.contactReducer.contacts
    }
}

const mapDispatchToProps = {
    loadContacts,
    removeContact
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)
