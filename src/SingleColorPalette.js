import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

export default class SingleColorPalette extends Component {

    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }

    state = {
        format:"hex"
    }

    gatherShades = (palette, colorToFilterBy) =>{
        let shades = []
        let allColors = palette.colors;

        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }

        return shades.slice(1);
    }

    changeFormat = (val) => {
        this.setState({format:val})
    }

    render() {
        const {format} = this.state;
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false}/>
        ));
        return (
            <div className="SingleColorPalette Palette">
                <Navbar handleChange={this.changeFormat} showLevels={false}/>
                <div className="PaletteColors">
                    {colorBoxes}
                    <div className="ColorBox goback">
                        <Link to={`/palette/${this.props.palette.id}`} className="back-button">Go Back</Link>
                    </div>
                </div>
                <div className="Footer">
                    {this.props.colorId.toUpperCase()}
                </div>
            </div>
        )
    }
}
