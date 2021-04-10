
import { Component } from 'react'
import {userService} from '../../Services/UserService.js'
import { getContactById} from '../../store/actions/contactActions';
import { connect } from 'react-redux';
import './TransferFund.scss'

 class _TransferFund extends Component {
    

 
    onTransferCoins = async (ev) => {
        ev.preventDefault()
        await userService.addMove(this.props.contact,+ev.eventPhase)
    }
   
 
    render() {
        const {contact} = this.props
        return (
            <div>
                <h3>transfer coins to {contact.name}</h3>
                 <form className='transfer-coins' onSubmit={this.onTransferCoins}>
                    <label htmlFor="Amount">Amount:</label>
                    <input required type="text" id="Amount" value={contact.amout} name="Amount" onChange={this.handleChange} />

                    
                    <button>Transfer</button>
                </form> 
            </div>
        )
    }
}

const mapStateToProps = state =>({
    contact:state.contactReducer.currContact
})

const mapDispatchToProps ={
    getContactById,
    
}

export const TransferFund = connect(mapStateToProps,mapDispatchToProps)(_TransferFund)
