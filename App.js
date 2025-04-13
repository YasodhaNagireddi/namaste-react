//Nested Elements
{/* <div id="parent">
    <div id="child1">
        <h1>I'm an h1 Tag</h1>
        <h2>I'm an h2 Tag</h2>
    </div>
    <div id="child2">
        <h1>I'm an h1 Tag</h1>
        <h2>I'm an h2 Tag</h2>
    </div>
</div> */}

// ReactElement(Object) => HTML(Browser Understands)

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm an h1 Tag"),
        React.createElement("h2", {}, "I'm an h2 Tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm an h1 Tag"),
        React.createElement("h2", {}, "I'm an h2 Tag")
    ])
]

);

console.log(parent) //ReactElement => Object


// const h1Element = React.createElement(
//     "h1", //tag name
//     { id: "heading", xyz: "abc" },  //attributes for that tag name
//     "Hello World From React!"       //text for that tag
// );

// console.log(h1Element); //This is an object at the end of the day create h1 element

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// rootElement.render(h1Element);  //render: is the object converted into html tag and put it into root

rootElement.render(parent);