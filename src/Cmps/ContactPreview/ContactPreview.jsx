
import React from 'react'
import { Link } from 'react-router-dom';

export  function ContactPreview({contact}) {
    return (
      <Link to={'/contact/' + contact._id}>
        <li className="contact-preview" >
        <img src={`https://robohash.org/${contact._id}`} alt="" />
        <h1>{contact.name}</h1>
        <strong>{contact.email}</strong>
        <h3>{contact.phone}</h3>
      </li>
      </Link>

    )
}
