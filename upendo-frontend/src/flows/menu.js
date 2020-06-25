import React from 'react';

import './menu.css';
import FlowFooter from '../modules/footer';
import { Link } from 'react-router-dom';
import HoneyJar from '../images/honeyjar.png';
import MediaQuery from 'react-responsive';

class MenuPage extends React.Component{
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const { alphaCode } = this.props.match.params;
        if ((typeof alphaCode !== undefined) && ! this.props.getDataStatus()){
            console.log("AlphaCode is:");
            console.log(alphaCode);
            await this.props.setAlphaCode(alphaCode);
            await this.props.retrieveAppData();
        } else {
            console.log('DEVLOG: URL Param Matching failed');
        }
    }

    render () {
        return (
            <div id="menuPage">
                <MediaQuery minDeviceWidth="1000px">
                    <img id="honeyJar" src={HoneyJar} />
                    <div className="honeyHeaderLeft">
                        <img src="" alt=""/>
                    </div>
                    <div className="honeyHeaderRight">
                        <img src="" alt=""/>
                    </div>
                    <IconContainer button={true} 
                        nextPage={this.props.beekeeperFirstPage}
                        icon={this.props.beekeeperIcon}
                        id="icon1"
                    />
                    <IconContainer button={true} 
                        nextPage={this.props.beekeeperFirstPage}
                        icon={this.props.beekeeperIcon}
                        id="icon2"
                    />
                    <IconContainer button={true} 
                        nextPage={this.props.beekeeperFirstPage}
                        icon={this.props.beekeeperIcon}
                        id="icon3"
                    />
                    <IconContainer button={true} 
                        nextPage={this.props.beekeeperFirstPage}
                        icon={this.props.beekeeperIcon}
                        id="icon4"
                    />
                </MediaQuery>
                <MediaQuery maxDeviceWidth="1000px" >
                <h1 id="honeyHeader" >Click Below to Discover More!</h1>
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
                </MediaQuery>
                <FlowFooter content="This is the Footer" footerClass='blackFooter'
                isMenu={true} retailerLink="" retailerLink=""/>
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
                <div className="iconButton" id={this.props.id}>
                     <Link to={this.props.nextPage}>
                        <img className="iconImage" src={this.props.icon} alt=""/>
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
export default MenuPage;