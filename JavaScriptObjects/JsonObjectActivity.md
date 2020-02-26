# JSON Object Activity
Given an array of person objects, ask students how to get or set the data. Every student should have a chance to answer a question. The questions can be asked via a game (like Around the World), or Popcorn (when a student answers a question correctly, they decide which student answers the next question), or simply by calling randomly. Students should be able to answer the questions verbally.

## Object
```js
let results = [
    {
        name: 'Alice',
        age: 34,
        contactInfo: {
            phoneNumber: '1234567890',
            emailAddress: 'Alice@alice.com',
        }
    },
    {
        name: 'Rudiger',
        age: 10,
        contactInfo: {
            phoneNumber: '1115553226',
            emailAddress: 'Person@people.com',
        }
    },
    {
        name: 'Pat',
        age: 67,
        contactInfo: {
            phoneNumber: '2128702309',
            emailAddress: 'Pat@hotmail.com',
        }
    }
]
```

## Questions
- Get the phone number of the third person in the list
- Get the name of the second person in the list
- Set the phone number of the first person to "2165553226"
    - They moved to Cleveland
- Get the age of the second person in the list
- Get the name of the third person in the list
- Set the age of the third person to itself, plus one
    - They got a year older
- Get the email address of the second person in the list
- Get the phone number of the first person in the list
- Get the age of the third person in the list
- Set the email address of the second person to the email address of the first person
    - They are too young to have their own e-mail
- Get the email address of the first person in the list
- Get the age of the first person in the list
- Get the name of the first person in the list
- Get the phone number of the second person in the list
- Set the email of the third person in the list to "Pat@gmail.com"
    - They got a new e-mail
- Set the name of the second person to "Rudy"
    - This is a nickname
- Get the email address of the third person in the list
