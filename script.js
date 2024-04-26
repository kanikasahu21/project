const courses = [
    {
      "courseName": "React Native Development",
      "author": "Alice Johnson",
      "price": 6000,
      "tags": ["React Native", "Mobile Development"],
      "duration": "4 months",
      "level": "Intermediate"
    },
    {
      "courseName": "Python for Data Science",
      "author": "Bob Brown",
      "price": 8000,
      "tags": ["Python", "Data Science"],
      "duration": "6 weeks",
      "level": "Intermediate"
    },
    {
      "courseName": "Advanced JavaScript Techniques",
      "author": "John Doe",
      "price": 7000,
      "tags": ["JavaScript", "Advanced"],
      "duration": "3 months",
      "level": "Advanced"
    },
    {
      "courseName": "Node.js Fundamentals",
      "author": "Jane Smith",
      "price": 4500,
      "tags": ["Node.js", "Backend Development"],
      "duration": "2 months",
      "level": "Intermediate"
    },
    {
      "courseName": "Ethical Hacking Basics",
      "author": "Charlie Brown",
      "price": 5500,
      "tags": ["Ethical Hacking", "Security"],
      "duration": "4 weeks",
      "level": "Beginner"
    },
    {
      "courseName": "Angular Essentials",
      "author": "Alice Johnson",
      "price": 7500,
      "tags": ["Angular", "Frontend Development"],
      "duration": "3 months",
      "level": "Intermediate"
    },
    {
      "courseName": "Machine Learning Masterclass",
      "author": "John Doe",
      "price": 10000,
      "tags": ["Machine Learning", "Advanced"],
      "duration": "6 months",
      "level": "Advanced"
    },
    {
      "courseName": "Django Web Development",
      "author": "Jane Smith",
      "price": 6800,
      "tags": ["Django", "Python", "Web Development"],
      "duration": "4 months",
      "level": "Intermediate"
    },
    {
      "courseName": "Cybersecurity Advanced Topics",
      "author": "Bob Brown",
      "price": 8500,
      "tags": ["Cybersecurity", "Advanced", "Security"],
      "duration": "3 months",
      "level": "Advanced"
    },
    {
      "courseName": "React.js Masterclass",
      "author": "Alice Johnson",
      "price": 7200,
      "tags": ["React", "Frontend Development"],
      "duration": "5 months",
      "level": "Advanced"
    },
    {
      "courseName": "Java Programming for Beginners",
      "author": "Jane Smith",
      "price": 3000,
      "tags": ["Java", "Beginner"],
      "duration": "2 months",
      "level": "Beginner"
    },
    {
      "courseName": "Advanced CSS Techniques",
      "author": "Charlie Brown",
      "price": 4800,
      "tags": ["CSS", "Advanced", "Frontend Development"],
      "duration": "6 weeks",
      "level": "Intermediate"
    }
  ];

var clutter = ""
courses.forEach(function(elem){
   clutter += ` <div class="element">
   <h1>${elem.courseName}</h1>
   <h6>${elem.author}</h6>
   <h3>${elem.level}</h3>
   <h4>Price: ${elem.price}</h4>
   <p>Duration: ${elem.duration}</p>
</div>`
})

var course = document.querySelector("#courses")
course.innerHTML = clutter

var beg = document.querySelector("#beg")
var inter = document.querySelector("#inter")
var adv = document.querySelector("#adv")


beg.addEventListener("click",function(){
   courses.filter(function(elem){
      return elem.level  == "Beginner"
   })
})


inter.addEventListener("click",function(){
   courses.filter(function(elem){
      return elem.level  == "Intermediate"
   })
})

adv.addEventListener("click",function(){
  courses.filter(function(elem){
      return elem.level  == "Advance"
   })
})

