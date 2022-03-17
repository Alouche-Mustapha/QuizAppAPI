const express = require("express");
const app = express();
const PORT = 1900;

// Put the api in the serve with the specific url
app.listen(PORT, () => console.log("The api link http://192.168.1.3:" + PORT));

// Go through this express json middleware every request that comes in wich will convert the body to json
app.use(express.json());

// New endpoint that allows us to post data with request from the specific url
app.post("/quizs/:id", (req, res) => {
  const { id } = req.params; // params is an object from the url ({name, value})
  const { name } = req.body; // body is the data that will be sent with the request (json, xml, ...)

  res.send({
    name: name,
    questions: [
      {
        id: id,
        question: "This is a new record : ",
        answer: "Some answer",
        choices: ["choice 1", "choice 2", "choice 3"],
      },
    ],
  });
});

// A new endpoint that allows us to get all the data from the api if we navigate to the specific url
//Client = send request by naviagting to the url   =>   Server = send data as object with the respense
app.get("/quizs", (req, res) => {
  res.status(200).send({
    quizs: [
      {
        name: "React Native",
        questions: [
          {
            id: 1,
            question: "React Native est un : ",
            answer: "framework ",
            choices: [
              "library",
              "language de programmation",
              "framework ",
              "langage de requêtes structurées",
            ],
          },
          {
            id: 2,
            question: "React Native est utilise pour : ",
            answer: "developper des app mobile cross platform",
            choices: [
              "exploiter des fichiers XML",
              "exploiter des structures de données",
              "developper des app mobile cross platform",
              "gerer le cote Back-end",
            ],
          },
        ],
      },
      {
        name: "JavaScript",
        questions: [
          {
            id: 1,
            question: "Inside which HTML element do we put the JavaScript?",
            answer: "<script>",
            choices: ["<js>", "<script>", "<scripting>", "<javascript>"],
          },
          {
            id: 2,
            question: "Where is the correct place to insert a JavaScript?",
            answer:
              "Both the <head> section and the <body> section are correct",
            choices: [
              "Both the <head> section and the <body> section are correct",
              "The <body> section",
              "The <head> section",
            ],
          },
          {
            id: 3,
            question:
              "The external JavaScript file must contain the <script> tag",
            answer: "False",
            choices: ["True", "False"],
          },
          {
            id: 4,
            question: "How do you create a function in JavaScript?",
            answer: "function myFunction()",
            choices: [
              "function = myFunction()",
              "function:myFunction()",
              "function myFunction()",
            ],
          },
          {
            id: 5,
            question: "How do you call a function named myFunction ?",
            answer: "myFunction()",
            choices: [
              "myFunction()",
              "call myFunction()",
              "call function myFunction()",
            ],
          },
          {
            id: 6,
            question: "How to write an IF statement in JavaScript?",
            answer: "if (i == 5)",
            choices: [
              "if i = 5 then",
              "if i = 5",
              "if (i == 5)",
              "if i == 5 then",
            ],
          },
          {
            id: 7,
            question: "How does a WHILE loop start?",
            answer: "while (i <= 10)",
            choices: [
              "while i = 1 to 10",
              "while (i <= 10)",
              "while (i <= 10; i++)",
            ],
          },
        ],
      },
      {
        name: "C#",
        questions: [
          {
            id: 1,
            question: 'What is a correct syntax to output "Hello World" in C#?',
            answer: 'Console.WriteLine("Hello World");',
            choices: [
              'cout << "Hello World";',
              'System.out.println("Hello World");',
              'Console.WriteLine("Hello World");',
              'Console.WriteLine("Hello World");',
            ],
          },
          {
            id: 2,
            question: "C# is an alias of C++",
            answer: "False",
            choices: ["False", "True"],
          },
          {
            id: 3,
            question: "How do you insert COMMENTS in C# code?",
            answer: "// This is a comment",
            choices: [
              "// This is a comment",
              "/* This is a comment",
              "/# This is a comment",
            ],
          },
          {
            id: 4,
            question:
              "Which data type is used to create a variable that should store text?",
            answer: "string",
            choices: ["Txt", "myString", "str", "string"],
          },
          {
            id: 5,
            question:
              "Which property can be used to find the length of a string?",
            answer: "Length()",
            choices: ["length()", "length", "getLength()", "Length()"],
          },
        ],
      },
    ],
  });
});
