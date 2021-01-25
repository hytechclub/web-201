# Driver's License: Individual Exercises
After completing the [code-along activity](DriversLicenseCodeAlong.md), build on it by working on these exercises.

## New People
Currently, the program should display licenses for two people. Add some more! Call the `printLicense` function for the following individuals:

- Homer Simpson, 39, not an organ donor
- Lisa Simpson, 8, is an organ donor
- Maggie Simpson, 1, is not an organ donor

Feel free to add any more people as well! Run the program, and verify that all the new licenses appear properly.

## Changing the Text
One of the nice things about template literals is that it's easier to update the text. Make the following changes to the way a license is printed in the `printLicense` function:

1. Use `>` instead of `|` for the left edge
1. Use `~` instead of `/` for the top and bottom
1. Extend the width of the license card by adding more `~`
1. Add a `<` after each piece of information

What is printed should end up looking something like this:

```
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
> Name: Lisa Simpson <
> Age: 8 <
> Donor: true <
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

Feel free to add any additional changes as well!

## A New Parameter
So far, the program displays three pieces of information. Update it so that it displays _four_ pieces of information instead! In addition to the name, age, and organ donor status, display a home state for the license.

1. Modify the `printLicense` function definition with an additional parameter: `state`
1. Modify each call to the `printLicense` function and pass in a state string value
1. In the body of the `printLicense` function, add a line to the template literal:
    `> State: <`
1. Use interpolation to pass the `state` parameter into the template
1. Run the program again, and verify that a state appears with each license!

## ASCII Art
>Note: This challenge may be difficult

In addition to printing out a license, print out a text-based image of each character. Here is some art for all of them:

```
                             (####)
                           (#######)
                         (#########)
                        (#########)
                      (#########)
                     (#########)
                    (#########)
                   (#########)
                  (########)
   _____         (#########)
  /     \       (#########)    |\/\/\/|     /\ /\  /\               /\
\/\/     |      (#########)    |      |     | V  \/  \---.    .----/  \----.
 |  (o)(o)       (o)(o)(##)    |      |      \_        /       \          /
 C   .---_)    ,_C     (##)    | (o)(o)       (o)(o)  <__.   .--\ (o)(o) /__.
  | |.___|    /____,   (##)    C      _)     _C         /     \     ()     /
  |  \__/       \     (#)       | ,___|     /____,   )  \      >   (C_)   <
  /_____\        |    |         |   /         \     /----'    /___\____/___\
 /_____/ \       OOOOOO        /____\          ooooo             /|    |\
/         \     /      \      /      \        /     \           /        \

  HOMER          MARGE         BART            LISA               MAGGIE
```

Note that when using JavaScript template literals, the backslash character (`\`) will have to be replaced with a double backslash (`\\`). This is because the backslash is used as an escape sequence.

1. Extract each character into a standalone ASCII art string
1. Add a new parameter to the `printLicense` function: `picture`
1. In the `printLicense` function, log the `picture` string to the console
1. Pass in each character's string to the `printLicense` function calls

Feel free to mess around with this, and choose different characters if desired. The main goal is to have some representation of each individual printed on each license!

## Birthday Cake
>Note: This challenge may be fairly challenging

Create a piece of customizable birthday cake ASCII Art. It should be able to place any name under 19 characters long in the middle of the cake. It should look something like this:

```
    i_i_i_i_i_i_i    
   |  ~ ~ ~ ~ ~  |   
   |  H a p p y  |   
 _i|_____________|i_ 
|^^^^^^^^^^^^^^^^^^^|
|  ~ ~ ~ ~ ~ ~ ~ ~  |
|  B i r t h d a y  |
|                   |
|   Homer Simpson   |
|                   |
~~~~~~~~~~~~~~~~~~~~~
```

1. Define a new function named `printCake`
1. Make the function take in a `name` parameter
1. In the body of the function, check if the `name` is short enough
    - If it is not, print a message and return
1. Pad the name an appropriate amount so that it appears in the middle of the cake
    - e.g., `Homer Simpson` should add three spaces on the left, and three on the right
1. Create a template literal containing the cake ASCII
1. Place the padded name in the proper spot within the string
1. Print the string to the console

Feel free to make changes as desired. These concepts can be applied to any number of ASCII art creations!