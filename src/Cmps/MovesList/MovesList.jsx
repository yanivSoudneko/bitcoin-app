
import React from 'react'
import './MovesList.scss'



export  function MovesList({moves}) {
    return (
        <div className="moves-list">
                       <h1>moves</h1>
                        {moves && moves.slice(0,3).map(move =>
                            <li key={move._id}>
                                <h3>To: {move.to}</h3>
                                <p>At : {move.createdAt}</p>
                                <h4>Amount : {move.amount} coins</h4>
                            </li>)
                        }
                    </div>
    )
}


// transferAt: new Date(Date.now()).toLocaleDateString(),
// transferTime: new Date(Date.now()).toLocaleTimeString(),

// export class _MovesList extends Component {

    
    

//     render() {
//         const { user } = this.props
//         return (
//             <div className="moves-list">
//                 <h1>moves</h1>
//                 {user && user.moves.slice(0,3).map(move =>
//                     <li key={move._id}>
//                         <h3>To: {move.to}</h3>
//                         <p>At : {move.createdAt}</p>
//                         <h4>Amount : {move.amount} coins</h4>
                        

//                     </li>)
//                 }
//             </div>
//         )
//     }

// }

// const mapStateToProps = state => ({
//     contact: state.contactReducer.currContact,
//     user: state.userReducer.user

// })

// const mapDispatchToProps = {
//     getContactById,
//     loadUser,
// }

// export const MovesList = connect(mapStateToProps, mapDispatchToProps)(_MovesList)
