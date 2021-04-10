import {ContactService} from '../../Services/ContactService'

export function loadContacts(filterBy){
    return async dispatch =>{
        const contacts = await ContactService.getContacts(filterBy)
        dispatch({type:'SET_CONTACTS',contacts})
    }
}

export function getContactById(contactId){
    return async dispatch => {
        const contact = await ContactService.getContactById(contactId)
        dispatch({type:'SET_CONTACT',contact})
    }
}

export function saveContact(contact){
    return async dispatch => {
        const idAdd = !contact._id
        const updatedContact = await ContactService.saveContact(contact)

        if(idAdd) dispatch({type:'ADD_CONTACT',contact : updatedContact})
        else dispatch({type:'UPDATE_CONTACT',updatedContact})
    }
}

export function removeContact(contactId){
    return async dispatch =>{
        await ContactService.deleteContact(contactId)
        dispatch({type:'REMOVE_CONTACT',contactId})
    }
}
