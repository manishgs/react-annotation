var React = require('react');
var AnnotationForm = require('./annotationForm');
var TabView = require('./tabView');

var APP = React.createClass({
    render: function () {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <AnnotationForm />
                        <TabView />
                      </div>
                </div>
            </div>
        );
    }
});

module.exports = APP;