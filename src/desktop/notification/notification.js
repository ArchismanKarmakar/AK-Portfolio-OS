import React,{Component} from 'react';
import './notification.css';
import Status from './statusicons/status';
import {theme_color_panels,notify_status} from '../../globalvariables';
import { FaExpand,FaBell, FaGithub, FaLinkedin, FaEnvelope, FaAt, FaStar } from 'react-icons/fa';

export default class Panel extends Component
{
    constructor(props)
    {
        super(props);
        this.expand=this.expand.bind(this);
        this.state={panelcolor:theme_color_panels,paneltype:'solid'};
    }
    expand()
    {
        this.props.parent_class.setState({ isFull: true });
    }
    nullBind()
    {

    }
    gitHubIcon=()=>
    {
        window.open("https://github.com/ArchismanKarmakar/", "_blank")
    }
    linkedin = () => {
        window.open("https://www.linkedin.com/in/", "_blank");
    }
    mailto = () => {
        window.open("mailto:a1921jee@gmail.com?subject=Feedback", "_blank");
    }
    repo = () => {
        window.open("https://github.com/ArchismanKarmakar/AK-Portfolio-OS", "_blank");
    }
    render()
    {
        return(
            <div id="notificationpanel" style={{backgroundColor:this.state.panelcolor}}>
            <Status icon={<FaExpand/>} event={this.expand} styles="expand_icon"/>
                {notify_status ? (<Status icon={<FaBell />} event={this.nullBind} />) : (<Status icon={<FaBell />} event={this.nullBind} />)}
                <Status icon={<FaGithub />} event={this.gitHubIcon} />
                <Status icon={<FaLinkedin />} event={this.linkedin} />
                <Status icon={<FaAt />} event={this.mailto} />
                <Status icon={<FaStar/>} event={this.repo}/>
            </div>
        )
    }
}