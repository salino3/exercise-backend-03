
//* First exercise

interface Student {
    name: string;
    age: number;
    occupation: string;
};

const students: Student[] = [
  {
    name: "Patrick Berry",
    age: 25,
    occupation: "Medical scientist",
  },
  {
    name: "Alice Garner",
    age: 34,
    occupation: "Media planner",
  },
];

const logStudent = ({ name, age }: Student) => {
  console.log(`  - ${name}, ${age}`);
};

console.log("Students:");
students.forEach(logStudent);

//
//* Second exercise

interface User {
  name: string;
  age: number;
  subject?: string;
  occupation?: string;
};

interface Teacher {
  name: string;
  age: number;
  subject: string;
};


const users: User[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor",
  } ,
  {
    name: "Jane Doe",
    age: 41,
    subject: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    subject: "Biology",
  },
];

console.log("-------------------");

const logUser = ({ name, age }: User) => {
  console.log(`  - ${name}, ${age}`);
};

users.forEach(logUser);

//
//* Third exercise

console.log('---------------------');

const logUser2 = (user: User) => {
  let extraInfo: string | undefined;
  if (user.occupation) {
    extraInfo = user.occupation;
  } else {
    extraInfo = user.subject;
  };
  console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
};