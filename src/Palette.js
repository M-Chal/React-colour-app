import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import "./Palette.css";

export default class Palette extends Component {

    state = {
        level: 500,
        format:"hex"
    }

    changeLevel = (level) => {
        this.setState({level: level})
    }

    changeFormat = (val) => {
        this.setState({format:val})
    }

    render() {
        const {colors, paletteName, emoji, id} = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} paletteID={id} showLink={true}/>
        ));

        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showLevels={true}/>
                <div className="PaletteColors">
                    {colorBoxes}
                </div>
                <div className="Footer">
                    {paletteName}
                    <span className="emoji">{emoji}</span>
                </div>
            </div>
        )
    }
}
