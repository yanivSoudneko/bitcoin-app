
import { Component } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import './Chart.scss'
export class Chart extends Component {

    state = {
        price: this.props.marketPrice,
        confirmed: this.props.confirmedTransaction
    }
    render() {
        const { price, confirmed } = this.state
        const priceValues = price.values.map(value => value.y)
        const confirmedValues = confirmed.values.map(value => value.y)
        return (
            <div className="charts">
                <h1>{price.name}</h1>
                <p>{price.description}</p>
                <Sparklines data={priceValues}>
                    <SparklinesLine color="blue" width={100} />
                </Sparklines>
                <h1>{confirmed.name}</h1>
                <p>{confirmed.description}</p>
                <Sparklines data={confirmedValues}>
                    <SparklinesLine color="red" width={100} />
                </Sparklines>

            </div>
        )
    }
}

