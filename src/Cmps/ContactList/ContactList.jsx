
import { ContactPreview } from '../ContactPreview'
import './ContactList.scss'


export function ContactList({ contacts }) {

    return (
        <ul className="contactList">
            {
                contacts && contacts.map(contact => <ContactPreview key={contact._id} contact={contact} />)
            }


        </ul>

    )
}
