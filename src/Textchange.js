import React, { Component } from 'react';
import './Textchange.css';

class Textchange extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerText: 'Hello!',
            fadingOut: false,
            textClass: 'default-text',
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
                this.setState({
                    headerText: array[currentIndex],
                    fadingOut: false,
                    textClass: 'fade-in-text',
                });

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
        const { headerText, fadingOut, textClass } = this.state;

        return (
            <div className={`text-container ${fadingOut ? 'fade-out' : textClass}`}>
                {headerText}
            </div>
        );
    }
}

export default Textchange;
