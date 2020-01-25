import React, { ReactDOM } from "react";
import { render } from "react-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  reDirectTo = (to)=>{
    const {history} = this.props
    console.log(history)
    history.push(to);
  }
  render() {
    
    
    return (
        <SideNav expanded={true}
           
          >
            
            <SideNav.Nav defaultSelected="home">
            
              <NavItem eventKey="call" onClick={()=>this.reDirectTo("call")}>
              
                <NavIcon>
                  <i className="fa fa-fw fa-phone" style={{ fontSize: '1.75em',padding: '14px' }} />
                </NavIcon>
                <NavText>
                Call
                  
                        </NavText>
                        
              </NavItem>
              
              <NavItem eventKey="insights" onClick={()=>this.reDirectTo("insights")}>
                <NavIcon>
                  <i className="fa fa-fw fa-bar-chart" style={{ fontSize: '1.75em',padding: '14px' }} />
                </NavIcon>
                <NavText>
                  Insights
                        </NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
    );
  }
}

export default SideNavBar;