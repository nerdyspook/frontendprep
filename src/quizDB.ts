export const quizDB = [
  {
    id: "1",
    title: "html",
    questions: [
      {
        question: `Which of the following is correct about HTML?`,
        options: [
          { value: "HTML uses User Defined Tags.", isCorrect: false },
          {
            value: "HTML uses tags defined within the language.",
            isCorrect: true,
          },
          { value: "Both A and B", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: `How to display preformatted text in HTML?`,
        options: [
          { value: "<p>", isCorrect: false },
          { value: "<pre>", isCorrect: true },
          { value: "<hr>", isCorrect: false },
          { value: "All of the above", isCorrect: false },
        ],
      },
      {
        question: `What is meant by an empty tag in HTML?`,
        options: [
          {
            value: "There is no such concept of an empty tag in HTML",
            isCorrect: false,
          },
          {
            value: "An empty tag does not require a closing tag",
            isCorrect: true,
          },
          {
            value: "An empty tag cannot have any content within it",
            isCorrect: false,
          },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: `Which HTML element is used to define description data?`,
        options: [
          { value: "<li>", isCorrect: false },
          { value: "<ol>", isCorrect: false },
          { value: "<dd>", isCorrect: true },
          { value: "<dl>", isCorrect: false },
        ],
      },
      {
        question: `How are quotations defined in HTML?`,
        options: [
          { value: "<quote>", isCorrect: false },
          { value: "<block>", isCorrect: false },
          { value: "<blockquote>", isCorrect: true },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: `What is the correct syntax to write an HTML comment?`,
        options: [
          { value: "<!-- Comment -->", isCorrect: true },
          { value: "// Comment", isCorrect: false },
          { value: "# Comment", isCorrect: false },
          { value: "/* Comment */", isCorrect: false },
        ],
      },
      {
        question: `Which property is used to set border colors in HTML?`,
        options: [
          { value: "border-color", isCorrect: false },
          { value: "border", isCorrect: true },
          { value: "Both A and B", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: `Which of the following tags is used to indicate the page’s start and endpoints?`,
        options: [
          { value: "<body>", isCorrect: false },
          { value: "<html>", isCorrect: true },
          { value: "<head>", isCorrect: false },
          { value: "<doctype>", isCorrect: false },
        ],
      },
      {
        question: `How to set a font for a whole page?`,
        options: [
          { value: "<targetfont>", isCorrect: false },
          { value: "<font>", isCorrect: false },
          { value: "<defaultfont>", isCorrect: true },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question:
          "If a background image is smaller than the screen on which it is being displayed, what will occur on the webpage?",
        options: [
          { value: "The image won't be displayed", isCorrect: false },
          { value: "The image will be stretched", isCorrect: false },
          { value: "The blank space will beshown in black.", isCorrect: false },
          { value: "The image will be repeated", isCorrect: true },
        ],
      },
    ],
  },

  {
    id: "2",
    title: "css",
    questions: [
      {
        question: `Which HTML tag is used to declare internal CSS?`,
        options: [
          { value: "<style>", isCorrect: true },
          { value: "<link>", isCorrect: false },
          { value: "<script>", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: `How can we write comments in CSS?`,
        options: [
          { value: "//", isCorrect: false },
          { value: "#", isCorrect: false },
          { value: "/* */", isCorrect: true },
          { value: "All of the above", isCorrect: false },
        ],
      },
      {
        question: `Can negative values be allowed in padding property?`,
        options: [
          { value: "Yes", isCorrect: false },
          { value: "No", isCorrect: true },
          { value: "Depends on property", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: `Which of the following CSS property is used for controlling the layout?`,
        options: [
          { value: "display", isCorrect: true },
          { value: "color", isCorrect: false },
          { value: "text", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: `How are custom fonts defined using CSS?`,
        options: [
          { value: "@font-face rule", isCorrect: true },
          { value: "Custom fonts cannot be defined", isCorrect: false },
          { value: "src tags", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question:
          "Which of the following CSS properties specifies the stack order of elements?",
        options: [
          { value: "overlap", isCorrect: false },
          { value: "z-index", isCorrect: true },
          { value: "No such specific property is present", isCorrect: false },
          { value: "None of the above", isCorrect: true },
        ],
      },
      {
        question:
          "Which of the following CSS property creates a clipping region and specifies the visible area of the element?",
        options: [
          { value: "clip-path", isCorrect: true },
          { value: "visibility", isCorrect: false },
          { value: "Both A and B", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: "What are the uses of CSS pseudo-elements?",
        options: [
          { value: "Style specified parts of an element", isCorrect: false },
          {
            value: "Style the first letter or line of an element",
            isCorrect: false,
          },
          {
            value: "Insert content before or after the elemnent",
            isCorrect: false,
          },
          { value: "All of the above ", isCorrect: true },
        ],
      },
      {
        question: "What function is used to insert values of a CSS variable?",
        options: [
          { value: "rand()", isCorrect: false },
          { value: "varchar()", isCorrect: false },
          { value: "var()", isCorrect: true },
          { value: "calc()", isCorrect: false },
        ],
      },
      {
        question: "What is the general syntax of writing the var() function?",
        options: [
          { value: "var(value)", isCorrect: false },
          { value: "var(--name, value)", isCorrect: true },
          { value: "var(--name)", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
    ],
  },

  {
    id: "3",
    title: "javascript",
    questions: [
      {
        question:
          "Which of the following methods is used to access HTML elements using Javascript?",
        options: [
          { value: "getElementById()", isCorrect: false },
          { value: "getElementsByClassName()", isCorrect: false },
          { value: "Both A and B", isCorrect: true },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: `Upon encountering empty statements, what does the Javascript Interpreter do?`,
        options: [
          { value: "Throws an error", isCorrect: false },
          { value: "Ignores the statements", isCorrect: true },
          { value: "Gives a warning", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question:
          "When the switch statement matches the expression with the given labels, how is the comparison done?",
        options: [
          {
            value:
              "Both the datatype and the result of the expression are compared",
            isCorrect: true,
          },
          {
            value: "Only the datatype of the expression is compared",
            isCorrect: false,
          },
          {
            value: "Only the value of the expression is compared",
            isCorrect: false,
          },
          { value: "None of the aove", isCorrect: false },
        ],
      },
      {
        question:
          "What keyword is used to check whether a given property is valid or not?",
        options: [
          { value: "lies", isCorrect: false },
          { value: "exists", isCorrect: false },
          { value: "is in", isCorrect: false },
          { value: "in", isCorrect: true },
        ],
      },
      {
        question: "What is the use of the <noscript> tag in Javascript?",
        options: [
          { value: "Clears all the cookies and cache", isCorrect: false },
          {
            value: "The contents are displayed by non-JS-based browsers",
            isCorrect: true,
          },
          { value: "Both A and B", isCorrect: false },
          { value: "None of the above", isCorrect: true },
        ],
      },
      {
        question: "What does the Javascript “debugger” statement do?",
        options: [
          { value: "It acts as a breakpoint in a program", isCorrect: true },
          {
            value: "It wiil debug all the errors in the program at runtime",
            isCorrect: false,
          },
          {
            value: "It will debug error in the current statement if any",
            isCorrect: false,
          },
          { value: "All of the above", isCorrect: false },
        ],
      },
      {
        question: "What does the ‘toLocateString()’ method do in JS?",
        options: [
          {
            value: "Returns a localised object representation",
            isCorrect: false,
          },
          { value: "Returns a parsed string", isCorrect: false },
          {
            value: "Returns a localized string representation of an object",
            isCorrect: true,
          },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question:
          "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",
        options: [
          { value: "Object Serialization", isCorrect: true },
          { value: "Object Encapsulation", isCorrect: false },
          { value: "Object Inheritance", isCorrect: false },
          { value: "None of the above", isCorrect: true },
        ],
      },
      {
        question:
          "How are objects compared when they are checked with the strict equality operator?",
        options: [
          {
            value: "The contents of the objects are compared",
            isCorrect: false,
          },
          { value: "Their references are compared", isCorrect: true },
          { value: "Both A and B", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: "Which object in Javascript doesn’t have a prototype?",
        options: [
          { value: "Base Object", isCorrect: true },
          { value: "All objects have a prototype", isCorrect: false },
          { value: "None of the objects have a prototype", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
    ],
  },

  {
    id: "4",
    title: "reactjs",
    questions: [
      {
        question:
          "In React what is used to pass data to a component from outside?",
        options: [
          { value: "setState", isCorrect: false },
          { value: "render with arguments", isCorrect: false },
          { value: "props", isCorrect: true },
          { value: "PropTypes", isCorrect: false },
        ],
      },
      {
        question: "How many elements does a react component return?",
        options: [
          { value: "2 Elements", isCorrect: false },
          { value: "1 Element", isCorrect: true },
          { value: "Multiple Elements", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: `How do you write an inline style specifying the font-size:12px and color:red; in JSX`,
        options: [
          { value: `style={{font-size:12, color:'red'}}`, isCorrect: false },
          { value: `style={{fontSize:'12px', color:'red'}}`, isCorrect: false },
          { value: `styel={fontSize:'12px', color:'red'}`, isCorrect: true },
          { value: "style={{font-size:12px, color:'red'}}", isCorrect: false },
        ],
      },
      {
        question: "What is a controlled input element?",
        options: [
          {
            value: "An input element with the controlled flag",
            isCorrect: false,
          },
          {
            value:
              "An input element that is controlled by the value of another input element",
            isCorrect: false,
          },
          {
            value: "An input element that can only accept a list of characters",
            isCorrect: false,
          },
          {
            value: `An input element whose value is being controlled by a component’s state`,
            isCorrect: true,
          },
        ],
      },
      {
        question: "What is the second argument for setState useful for?",
        options: [
          {
            value: "To invoke code after the setState operation is done",
            isCorrect: true,
          },
          {
            value:
              "To replace the state completely instead of the default merge action",
            isCorrect: false,
          },
          {
            value: "To access the previous state before the setState operation",
            isCorrect: false,
          },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: "What tool does React use to compile JSX?",
        options: [
          { value: "JSX Compiler", isCorrect: false },
          { value: "ReactDOM", isCorrect: false },
          { value: "React Router", isCorrect: false },
          { value: "Babel", isCorrect: true },
        ],
      },
      {
        question:
          "How can you optimze performance for a function component that always renders the same way?",
        options: [
          {
            value: "Wrap it in the React.memo higher order component",
            isCorrect: true,
          },
          {
            value: "Use the shouldComponentUpdate lifecycle method",
            isCorrect: false,
          },
          { value: "Use the useMemo Hook", isCorrect: false },
          { value: "Use the useReducer Hook", isCorrect: false },
        ],
      },
      {
        question: "What is a common use case for ref?",
        options: [
          { value: "To directly access a DOM node  ", isCorrect: true },
          { value: "To refer to another JavaScript file", isCorrect: false },
          { value: "To refer to a function", isCorrect: false },
          { value: "To bind the function", isCorrect: false },
        ],
      },
      {
        question:
          "Why should you avoid copying the values of props into a component's state?",
        options: [
          {
            value: "Because prop values cannot be stored in state",
            isCorrect: false,
          },
          {
            value:
              "Because you want to allow data to flow back up to the parent",
            isCorrect: false,
          },
          {
            value:
              "Because that would create two instances of the same state that could become out of sync  ",
            isCorrect: true,
          },
          { value: "Because you should never mutate state", isCorrect: false },
        ],
      },
      {
        question: "What is the children prop?",
        options: [
          {
            value: "A property that lets you set an object as a property",
            isCorrect: false,
          },
          {
            value:
              "A property that lets you nest components in other components  ",
            isCorrect: true,
          },
          {
            value: "A property that lets you pass data to child components",
            isCorrect: false,
          },
          {
            value: "A property that adds child values to state",
            isCorrect: false,
          },
        ],
      },
    ],
  },

  {
    id: "5",
    title: "redux",
    questions: [
      {
        question:
          "Redux solves this problem by managing application’s state with a single global object called ?",
        options: [
          { value: "directory", isCorrect: false },
          { value: "store", isCorrect: true },
          { value: "file", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: "What is true about redux?",
        options: [
          {
            value: "Redux is a predictable state container for JavaScript apps",
            isCorrect: false,
          },
          {
            value:
              "Redux fundamental principles help in maintaining consistency throughout your application",
            isCorrect: false,
          },
          {
            value: "Redux makes debugging and testing easier",
            isCorrect: false,
          },
          { value: "All of the above", isCorrect: true },
        ],
      },
      {
        question: "Actions and states are held together by a function called?",
        options: [
          { value: "Redux", isCorrect: false },
          { value: "Reducer", isCorrect: true },
          { value: "View", isCorrect: false },
          { value: "Subscribe", isCorrect: false },
        ],
      },
      {
        question: "Which of the following is react-Redux helper method?",
        options: [
          { value: "help()", isCorrect: false },
          { value: "assist()", isCorrect: false },
          { value: "connect()", isCorrect: true },
          { value: "view()", isCorrect: false },
        ],
      },
      {
        question: "Which of them provide us debugging platform for Redux apps?",
        options: [
          { value: "Redux-Devtools", isCorrect: true },
          { value: "Redux-Testing", isCorrect: false },
          { value: "Redux-Middleware", isCorrect: false },
          { value: "Redux-Subscriber", isCorrect: false },
        ],
      },
      {
        question: "Which of the following makes stores available?",
        options: [
          { value: "Component", isCorrect: false },
          { value: "Container", isCorrect: false },
          { value: "Actions", isCorrect: false },
          { value: "Provider", isCorrect: true },
        ],
      },
      {
        question:
          "Which method helps you retrieve the current state of your Redux store?",
        options: [
          { value: "dispatch", isCorrect: false },
          { value: "subscribe", isCorrect: false },
          { value: "action", isCorrect: false },
          { value: "getState", isCorrect: true },
        ],
      },
      {
        question:
          "Which of the following rules are correct for Pure Functions?",
        options: [
          {
            value: "A function returns the same result for same arguments",
            isCorrect: false,
          },
          {
            value:
              "Its evaluation has no side effects, i.e., it does not alter input data",
            isCorrect: false,
          },
          {
            value: "No mutation of local & global variables",
            isCorrect: false,
          },
          { value: "All of the above", isCorrect: true },
        ],
      },
      {
        question: "Redux follows what type of data flow?",
        options: [
          { value: "Unidirectional", isCorrect: true },
          { value: "Bidirectional", isCorrect: false },
          { value: "Both A and B", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: "A createStore function can have how many arguments?",
        options: [
          { value: "1", isCorrect: false },
          { value: "2", isCorrect: false },
          { value: "3", isCorrect: true },
          { value: "4", isCorrect: false },
        ],
      },
    ],
  },

  {
    id: "6",
    title: "node",
    questions: [
      {
        question:
          "To include the HTTP server in the node module, what function do we use?",
        options: [
          { value: "get()", isCorrect: false },
          { value: "require()", isCorrect: true },
          { value: "createServer()", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question:
          "What method is used to return the current working directory of the process?",
        options: [
          { value: "cwd()", isCorrect: true },
          { value: "pwd()", isCorrect: false },
          { value: "cmd()", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: "Default scope in Node.js application is?",
        options: [
          { value: "Global", isCorrect: false },
          { value: "Local", isCorrect: true },
          { value: "Local to Object", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question:
          "The node object property which is used to return the node just before the current node is?",
        options: [
          { value: "localName", isCorrect: false },
          { value: "index", isCorrect: false },
          { value: "previousSibling", isCorrect: true },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: "The advantages of using node modules are?",
        options: [
          { value: "Provides a means of dividing up tasks", isCorrect: false },
          {
            value: "Provides a means of reuse of program code",
            isCorrect: false,
          },
          {
            value:
              "Provides a means of testing individual parts of the program",
            isCorrect: false,
          },
          { value: "All of the above", isCorrect: true },
        ],
      },
      {
        question: "When does a stream fire a data event?",
        options: [
          { value: "When there is data to read", isCorrect: true },
          { value: "When there is data to write", isCorrect: false },
          { value: "When there is no data available", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question:
          "Which of the following NodeJS module splits up a web address into readable parts?",
        options: [
          { value: "Express", isCorrect: false },
          { value: "Cors", isCorrect: false },
          { value: "URL", isCorrect: true },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: "Which node module is used to handle binary data?",
        options: [
          { value: "binary", isCorrect: false },
          { value: "dgram", isCorrect: false },
          { value: "crypto", isCorrect: false },
          { value: "buffer", isCorrect: true },
        ],
      },
      {
        question: "What function is used to fire an event?",
        options: [
          { value: "fire()", isCorrect: false },
          { value: "emit()", isCorrect: true },
          { value: "calc()", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question: "What does the fs module stand for?",
        options: [
          { value: "File Store", isCorrect: false },
          { value: "File Service", isCorrect: false },
          { value: "File System", isCorrect: true },
          { value: "None of the above", isCorrect: false },
        ],
      },
    ],
  },
];
