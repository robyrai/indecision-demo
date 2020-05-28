

class VisibliltyToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            title: "Visibility Toggle",
            showBtnMsg: "Show Details",
            hideBtnMsg: "Hide Details",
            msg: "This is my message. It gets shown and hidden upon clicks",
            visibility: true,
        };
    }

    handleToggleVisibility(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            }
        });
    }

    render() {
        return (
            <div>
                <h1 id="someId">{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? this.state.showBtnMsg : this.state.hideBtnMsg}</button>
                {!this.state.visibility && (
                    <div>
                        <p>
                            {this.state.msg}
                        </p>
                    </div>
                )}
                <p>{this.state.visibility ? null : this.state.msg}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibliltyToggle />, document.getElementById("app"));
