import { Component } from 'react'
import MobileNav from "./MobileNav";


export class Hamburger extends Component {
    state = {
        open: false,
    }
    handleButtonClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    };

    render() {
        return (
            <>
            <div className={this.state.open ? "hamburger active" : "hamburger" }>

                <div className="ham-trigger flex-vertical" onClick={this.handleButtonClick} onKeyDown={this.handleButtonClick} role="button" tabIndex="0">
                    <div className={this.state.open ? "ham-button active" : "ham-button" }>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </div>
                </div>
                
            </div>

            {this.state.open && (
                <MobileNav />  
            )}
            </>
        )
    }
}

export default Hamburger