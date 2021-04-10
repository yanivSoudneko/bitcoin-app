
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getContactById, removeContact} from '../../store/actions/contactActions';
import { TransferFund } from '../../Cmps/TransferFund/TransferFund.jsx';
import { loadUser } from '../../store/actions/userActions';
import back from '../../assets/logos/back.png';
import remove from '../../assets/logos/remove.png'
import edit from '../../assets/logos/edit.png'

import './ContactDetails.scss'





export  function DetailsMovesList({props}) {
    console.log('props',props.user.moves);
    const contactId = props.contact._id
    const moves = props.user.moves.filter(move => move.toId === contactId)
    return (
        <div className="moves-details">
                       <h1>moves</h1>
                        {moves && moves.map((move) =>
                            <li key={move._id}>
                                <h3>To: {move.to}</h3>
                                <p>At : {move.createdAt}</p>
                                <h4>Amount : {move.amount} coins</h4>
                            </li>)
                        }
                    </div>
    )
}



 class _ContactDetails extends Component {
    

    componentDidMount() {
        this.props.getContactById(this.props.match.params.id)
    }
  

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getContactById(this.props.match.params.id)
        }
    }

  

    onRemoveContact = async () => {
        await this.props.removeContact(this.props.contact._id)
        this.props.history.push('/contact')
      }

   
    render() {
        const { contact} = this.props
        console.log('details',this.props);
        if (!contact) return <div>Loading contact.....</div>
        return (
            <div className="contact-details">
                <img src={`https://robohash.org/${contact._id}`} alt="" />
                <p>{contact.name}</p>
                <small>{contact.email}</small>
                <p>Phone {contact.phone}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore deleniti quis facere, a rerum, voluptatem vitae iusto possimus voluptatum libero nulla, facilis hic at eligendi molestias. Quasi, corporis repellendus.</p>
                <div className="actions">
                <button onClick={this.onRemoveContact}><img src={remove} alt=''/></button>
                    <Link to={'/contact/edit/' + contact._id}><img src={edit} alt=''/></Link>
                    <Link to="/contact"><img src={back} alt=''/></Link>
                </div>
                <TransferFund  /> 
                 <DetailsMovesList props={this.props}/> 
            </div>
        )
    }
}
const mapStateToProps = state =>({
    contact:state.contactReducer.currContact,
    user: state.userReducer.user
})

const mapDispatchToProps ={
    getContactById,
    removeContact,
    loadUser,
}

export const ContactDetails = connect(mapStateToProps,mapDispatchToProps)(_ContactDetails)
