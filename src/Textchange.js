import React, { Component } from 'react';
import './Textchange.css';





class Textchange extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerText: 'Hello!',
            fadingOut: false,
            textClass: 'default-text',
            fontSizeMultiplier: 1, 
        };
    }

    componentDidMount() {
        this.startTextChange();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startTextChange = () => {
        let array = this.props.textArray,
            intervalDurationMs = this.props.intervalDurationMs,
            currentIndex = 0,
            maxNumTimes = -1,
            numTimesRan = 0;

        this.interval = setInterval(() => {
            this.setState({
                fadingOut: true,
            });

            setTimeout(() => {
                this.setState((prevState) => ({
                    headerText: array[currentIndex],
                    fadingOut: false,
                    textClass: 'fade-in-text',
                    fontSizeMultiplier: 1.25, 
                }));

                const growingInterval = setInterval(() => {
                    this.setState((prevState) => ({
                        fontSizeMultiplier: prevState.fontSizeMultiplier === 1.25 ? 1 : 1.25, // Toggle font size
                    }));
                }, 250); 

                setTimeout(() => {
                    clearInterval(growingInterval);
                }, 1000); 
                
                currentIndex++;
                if (currentIndex > array.length - 1) {
                    if (maxNumTimes === -1) {
                        currentIndex = 0;
                    } else {
                        numTimesRan++;
                        if (numTimesRan === maxNumTimes) {
                            clearInterval(this.interval);
                        } else {
                            currentIndex = 0;
                        }
                    }
                }
            }, 500);
        }, intervalDurationMs);
    };

    render() {
        const { headerText, fadingOut, textClass, fontSizeMultiplier } = this.state;
        const fontSize = `${7 * fontSizeMultiplier}vw`; 

        return (
            <div
                className={`text-container ${fadingOut ? 'fade-out' : textClass}`}
                style={{ fontSize }} 
            >
                {headerText}
            </div>
        );
    }
}

export default Textchange;
