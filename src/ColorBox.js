import React, { Component } from 'react'
import './ColorBox.css';
import{CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';

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
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{background}}className="ColorBox">
                    <div style={{background}} className={`overlay ${overlay}`} />
                    <div className={`copy-message ${overlay}`}>
                        <h1>Copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</  button>
                    </div>
                    {showLink && (
                        <Link to={`/palette/${paletteID}/${id}`} onClick={e => e.stopPropagation()}>
                        <span className="see-more">More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
            )
        }
    }
    