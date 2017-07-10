import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SiteStar.css';

class SiteStar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    render() {
        const imgSrc = this.state.active ? "selectedStar.png" : "unselectedStar.png";
        const style = {
            position: "absolute",
            top: this.props.top,
            left: this.props.left,
        };
        return (
            <img className="siteStar" src={"img/" + imgSrc} style={style} alt="imgSrc" />
        );
    }

    setActive(isActive) {
        this.setState({
           active: isActive
        });
    }
}

SiteStar.propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
}

export default SiteStar;
