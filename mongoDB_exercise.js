use signDesk

db.employee.insertOne({name:"Alice",age:23,position:"Developer",salary:45000,city:"Banglore",hobbies:["Singing","Travelling","Cooking"]})

db.employee.insertMany([
  {
    "name": "Bob",
    "age": 27,
    "position": "Software Engineer",
    "salary": 60000,
    "city": "Mumbai",
    "hobbies": ["Gaming", "Reading", "Cycling"]
  },
  {
    "name": "Charlie",
    "age": 25,
    "position": "Data Analyst",
    "salary": 55000,
    "city": "Pune",
    "hobbies": ["Photography", "Chess", "Hiking"]
  },
  {
    "name": "Diana",
    "age": 29,
    "position": "Manager",
    "salary": 75000,
    "city": "Delhi",
    "hobbies": ["Painting", "Yoga", "Traveling"]
  },
  {
    "name": "Ethan",
    "age": 24,
    "position": "UI/UX Designer",
    "salary": 50000,
    "city": "Chennai",
    "hobbies": ["Sketching", "Music", "Swimming"]
  },
  {
    "name": "Fiona",
    "age": 26,
    "position": "Cybersecurity Specialist",
    "salary": 70000,
    "city": "Hyderabad",
    "hobbies": ["Ethical Hacking", "Martial Arts", "Coding"]
  },
  {
    "name": "George",
    "age": 30,
    "position": "DevOps Engineer",
    "salary": 90000,
    "city": "Kolkata",
    "hobbies": ["Running", "Cloud Computing", "Gaming"]
  },
  {
    "name": "Hannah",
    "age": 28,
    "position": "Manager",
    "salary": 85000,
    "city": "Bangalore",
    "hobbies": ["Blogging", "Public Speaking", "Cooking"]
  },
  {
    "name": "Ian",
    "age": 22,
    "position": "Intern",
    "salary": 30000,
    "city": "Ahmedabad",
    "hobbies": ["Gaming", "Movies", "Traveling"]
  },
  {
    "name": "Julia",
    "age": 31,
    "position": "Developer",
    "salary": 95000,
    "city": "Jaipur",
    "hobbies": ["Cycling", "AI Research", "Music"]
  }
])

db.employee.find({})

db.employee.find({},{_id:0,name:1,position:1})

db.employee.find({}).sort({salary:-1})

db.employee.find({salary:{$gt:75000}})

db.employee.find({$or:[{position:"Developer"},{position:"Manager"}]})

db.employee.find({$and:[{position:"Developer"},{salary:{$gt:70000}}]})

db.employee.find({position:{$ne:"Manager"}})

db.employee.find({name:{$regex:"^A"}})

db.employee.updateOne({name:"Alice"},{$set:{salary:75000}})

db.employee.updateMany({position:"Developer"},{$inc:{salary:5000}})

db.employee.deleteMany({name:"Charlie"})

db.employee.deleteMany({city:"Chicago"})
