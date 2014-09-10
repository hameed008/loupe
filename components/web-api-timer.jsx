var React = require('react');

module.exports = React.createClass({
    render: function () {
        var animStyle = {
            animationDuration: this.props.timeout,
            WebkitAnimationDuration: this.props.timeout
        };

        return (
            <div className='webapi-timer'>
              <div className="webapi-code">
                {this.props.children}
              </div>
              <div className="stopwatch-wrapper" style={animStyle}>
                <div className="stopwatch-spinner stopwatch-pie" style={animStyle}></div>
                <div className="stopwatch-filler stopwatch-pie" style={animStyle}></div>
                <div className="stopwatch-mask" style={animStyle}></div>
              </div>
            </div>
        );
    }
});