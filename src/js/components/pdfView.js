var React = require('react');

var PDFView = React.createClass({

    render: function () {
        return (
            <div id="pdf">
                <div className="pdf-panel">
                    <button id="prev">Previous</button>
                    <button id="next">Next</button>
                    <button className="zoom" data-scale="0.5">Zoom 50%</button>
                    <button className="zoom" data-scale="1.0">Zoom 100%</button>
                    <button className="zoom" data-scale="1.5">Zoom 150%</button>
                    <button className="zoom" data-scale="2.0">Zoom 200%</button>
                    <span>Page:
                        <span id="page_num"></span>
                        /
                        <span id="page_count"></span>
                    </span>
                </div>

                <div className="canvasWrapper">
                    <div id="canvas">
                        <canvas id="the-canvas"></canvas>
                    </div>
                </div>
            </div>
        )
    }

});


module.exports = PDFView;