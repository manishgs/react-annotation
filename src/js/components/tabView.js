var React = require('react');
var TextView = require('./textView');
var PDFView = require('./pdfView');

var TabView = React.createClass({
    getInitialState: function () {
        return {showTab: 'pdf'};
    },
    showText: function () {
        this.setState({showTab: 'text'});
    },
    showPdf: function () {
        this.setState({showTab: 'pdf'});
    },
    render: function () {
        return (
            <div className="col-md-9">
                <ul>
                    <li>
                        <a href="#" onClick={this.showText}>Text</a>
                    </li>
                    <li>
                        <a href="#" onClick={this.showPdf}>PDF</a>
                    </li>
                </ul>


            {(this.state.showTab == 'text') ? <TextView /> : null }
            {(this.state.showTab == 'pdf') ? <PDFView /> : null }

            </div>
        )
    }

});


module.exports = TabView;