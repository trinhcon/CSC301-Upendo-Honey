import React from 'react';

import './menu.css';
import FlowFooter from '../modules/footer';
import { Link } from 'react-router-dom';
import HoneyJar from '../images/honeyjar.png';

class MenuPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="menuPage">
                <h1 id="honeyHeader" >Click Below to Discover More</h1>
                <img id="honeyJar" src={HoneyJar} />

                <div id="iconGrid">
                    <IconContainer button={false} />
                    <IconContainer button={true} 
                        nextPage={this.props.beekeeperFirstPage}
                        icon={this.props.beekeeperIcon}
                    />
                    <IconContainer button={false} />
                    <IconContainer button={true} 
                        nextPage={this.props.environmentFirstPage}
                        icon={this.props.environmentIcon}
                    />
                    <IconContainer button={false} />
                    <IconContainer button={true} 
                        nextPage={this.props.honeyFirstPage}
                        icon={this.props.honeyIcon}
                    />
                    <IconContainer button={false} />
                    <IconContainer button={true} 
                        nextPage={this.props.tanzaniaFirstPage}
                        icon={this.props.tanzaniaIcon}
                    />
                    <IconContainer button={false} />
                </div>
                <FlowFooter content="This is the Footer" footerClass='blackFooter'/>
            </div>
        )
 
    }

}

class IconContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.button) {
            return (
                <div className="iconButton">
                     <Link to={this.props.nextPage}>
                        <img src={this.props.icon} alt=""/>
                     </Link>

                </div>
            );
        } else {
            return (
                <div className="iconButtonEmpty">
                    <p>bye</p>
                </div>
            );
        }
    }

}

/**               if (this.props.className === "iconButton") {
            return (
                <div>
                    <p>hello</p>

                </div>
            );
        } else {
            return (
                <div >
                    <p>bye</p>
                </div>
            );
 * 
 * 
 * 
 *              
 * 
 *                 
 * 
 * <iconContainer button={false} />
                    <iconContainer button={true}
                        id="beekeeper"
                        nextPage={this.props.beekeeperFirstPage}
                        icon={this.props.beeekeeperIcon}
                    />
                    <iconContainer button={false} />
                    <iconContainer button={true}
                        id="environment"
                        nextPage={this.props.environmentFirstPage}
                        icon={this.props.beeekeeperIcon}
                    />
                    <iconContainer button={false} />
                    <iconContainer button={true}
                        id="honey"
                        nextPage={this.props.honeyFirstPage}
                        icon={this.props.beeekeeperIcon}
                    />
                    <iconContainer button={false} />
                    <iconContainer button={true}
                        id="tanzania"
                        nextPage={this.props.tanzaniaFirstPage}
                        icon={this.props.beeekeeperIcon}
                    />
                    <iconContainer button={false} />
 */
export default MenuPage;