console.log("App.js is running!");

const appObj = {
    title: "Indecision App",
    subtitle: "This is REACT application.",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        appObj.options.push(option);
        e.target.elements.option.value = '';
        console.log(appObj.options);
        render();
    };
};

const onRemoveAll = () => {
    // e.preventDefault();
    appObj.options = [];
    console.log(appObj.options);
    render();
};

const onMakeDecision = () => {
    const listLen = appObj.options.length;
    const randomNum = Math.floor(Math.random() * listLen);
    const option = appObj.options[randomNum];
    alert(option);
};

//JSX - JavaScript XML

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1 id="someId">{appObj.title}</h1>
            {appObj.subtitle && <p>{appObj.subtitle}</p>}
            {(appObj.options && appObj.options.length > 0) ? <p>Here are your option: {appObj.options}</p> : <p>No Options</p>}
            <button disabled={appObj.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {
                    appObj.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
                </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
            <button onClick={onRemoveAll}>Remove All</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();