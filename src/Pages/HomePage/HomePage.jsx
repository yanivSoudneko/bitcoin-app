
import { Component } from 'react'
// import { userService } from '../../Services/UserService.js'
import { bitcoinService } from '../../Services/BitCoinService.js'
import { MovesList } from '../../Cmps/MovesList/MovesList.jsx';
import { loadUser } from '../../store/actions/userActions';
import { connect } from 'react-redux';

import './HomePage.scss'

 class _HomePage extends Component {

    state = {
        rate: null,
    }

    componentDidMount(){
        this.loadRate()
    }
    async loadRate() {
        const rate = await bitcoinService.getRate(this.props.user.coins)
        this.setState({ rate })
    }

    get rateFormated () {
        return this.state.rate.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })
    }

    render() {
        const { rate } = this.state
        console.log(this.props);
        const {user} = this.props
        return (
            <div>
                <h1>BitCoin App</h1>
                {user && <div>
                    <h1>{user.name}</h1>
                    <h1>{user.coins}</h1>
                    {rate &&
                            <h2>Current Bitcoin rate: {this.rateFormated}</h2>
                        }
                </div>}
                <MovesList moves={user.moves}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    user: state.userReducer.user

})

const mapDispatchToProps = {
    loadUser,
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)


// transferAt: new Date(Date.now()).toLocaleDateString(),
// transferTime: new Date(Date.now()).toLocaleTimeString(),
