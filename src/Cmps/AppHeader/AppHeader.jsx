
import { NavLink, withRouter } from 'react-router-dom'
import './AppHeader.scss'
import users from '../../assets/logos/users.png'
import increase from '../../assets/logos/increase.png'
import home from '../../assets/logos/home.png'
import contact from '../../assets/logos/contact.png'
import bitcoin from '../../assets/logos/bitcoin.png'
const _AppHeader = (props) => {
    return (
        <div className="app-header">
            <h1><NavLink exact to="/" activeClassName="active-nav"><img src={bitcoin} alt=''/></NavLink></h1>
            <ul>
                <li><NavLink exact to="/" activeClassName="active-nav"><img src={home} alt=''/></NavLink></li>
                <li><NavLink to="/contact" activeClassName="active-nav"><img src={users} alt=''/></NavLink></li>
                <li><NavLink to='/statistic' activeClassName="active-nav"><img src={increase} alt=''/></NavLink></li>
                <li><NavLink to='/signup' activeClassName="active-nav"><img src={contact} alt=''/></NavLink></li>
            </ul>
        </div>
    )
}

export const AppHeader = withRouter(_AppHeader)

