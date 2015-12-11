var React = require('react');
var ReactDOM = require('react-dom');

var CreateForm = React.createClass({
    render: function () {
        return (
            <div className="annotation-form">
                <form method="POST" accept-charset="UTF-8">
                    <div className="form-group">
                        <select className="form-control" name="category">
                            <option value="" selected="selected">Select</option>
                            <option value="np">Nepal</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Annotation..." className="form-control" name="text" cols="50" rows="10"></textarea>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary form-control" type="submit" value="Submit" />
                    </div>
                    <ul className="annotated-text-list">

                    </ul>
                </form>
            </div>
        )
    }
});

var AnnotatedList = React.createClass({
    render: function () {
        return (
            <ul>
            </ul>
        )
    }
});


var AnnotationForm = React.createClass({
    getInitialState: function () {
        return {showForm: false};
    },
    onClickToggleForm: function () {
        this.setState({showForm: !this.state.showForm});
    },
    render: function () {
        return (
            <div className="col-md-3">
                <div className="annotation-form-title">
                    <h2 className="pull-left">Annotations</h2>
                    <button onClick={this.onClickToggleForm}  className="pull-right btn btn-primary">Add</button>
                </div>

                {this.state.showForm ? <CreateForm/> : null}

                <AnnotatedList />
            </div>
        )
    }
});

module.exports = AnnotationForm;