
import { Component } from 'react'
import { bitcoinService } from '../../Services/BitCoinService.js'
import {Chart} from '../../Cmps/Chart'
import './StatisticPage.scss'

export class StatisticPage extends Component {
    
    state = {
      marketPrice:null,
      confirmedTransaction:null,
    }
    componentDidMount() {
        this.getMarketPrice()
        this.confirmedTransaction()
    }
    
    async getMarketPrice(){
        const marketPrice = await bitcoinService.getMarketPrice()
        this.setState({marketPrice})
    }

    async confirmedTransaction(){
        const confirmed = await bitcoinService.getConfirmedTransactions()
        this.setState({confirmedTransaction:confirmed})
    }

    render() {
        const {marketPrice,confirmedTransaction} = this.state
        return (
            <div>
             {marketPrice && confirmedTransaction && <Chart marketPrice={marketPrice} confirmedTransaction={confirmedTransaction}/>}
            </div>
        )
    }
}
