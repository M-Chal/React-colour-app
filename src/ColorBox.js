import React, { Component } from 'react'
import './ColorBox.css';
import{CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';

export default class ColorBox extends Component {
    state = {
        copied:false
    }

    changeCopyState = () =>{
        this.setState({copied:true}, () => {
            setTimeout(() => this.setState({copied:false}), 1500)
        });
    }

    render() {
        const {name, background, id, paletteID, showLink} = this.props;
        const overlay = this.state.copied ? "show" : "";
        const isDark = chroma(background).luminance() < 0.1 ? "light-text" : "";
        const isLight = chroma(background).luminance() > 0.6 ? "dark-text" : ""
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{background}}className="ColorBox">
                    <div style={{background}} className={`overlay ${overlay}`} />
                    <div className={`copy-message ${overlay}`}>
                        <h1 className={isLight}>Copied!</h1>
                        <p className={isLight}>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDark}>{name}</span>
                        </div>
                        <button className={`copy-button ${isLight}`}>Copy</  button>
                    </div>
                    {showLink && (
                        <Link to={`/palette/${paletteID}/${id}`} onClick={e => e.stopPropagation()}>
                        <span className={`see-more ${isLight}`}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
            )
        }
    }
    