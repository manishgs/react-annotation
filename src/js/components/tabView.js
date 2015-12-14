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
                <div className="btn-group" role="group" >
                    <button type="button" onClick={this.showText} className="btn btn-default">Text</button>
                    <button type="button" onClick={this.showPdf} className="btn btn-default">PDF</button>
                </div>
                {(this.state.showTab == 'text') ? <TextView /> : null }
                {(this.state.showTab == 'pdf') ? <PDFView /> : null }
            </div>
        )
    }

});

module.exports = TabView;