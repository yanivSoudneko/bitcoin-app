
import { Component } from 'react'

import './ContactFilter.scss'

export class ContactFilter extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
    }

 

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }

    render() {
        const { name, phone, email } = this.state
        return (
            <form className="contact-filter" onSubmit={(ev) => ev.preventDefault()}>
                <label htmlFor="name">By name</label>
                <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
                <label htmlFor="email">By mail</label>
                <input type="text" id="email" name="email" value={email} onChange={this.handleChange} />
                <label htmlFor="number">By number</label>
                <input type="text" id="number" value={phone} name="phone" onChange={this.handleChange} />
            </form>
        )
    }
}
