1. Line 12 will print out the length of the ```prices``` array because that is the value of ```i``` when the for loop finishes and var allows it to be accessed outside of the for loop.
2. Line 13 will print out the discounted price of the last object in the ```prices``` array since that is the last time it is updated and var allows it to be accessed outside of the for loop.
3. Line 14 will print out the rounded price value of the last value in ```prices``` because that will be the last time it is updated.
4. This function returns an array of the final prices of each item in ```prices``` because every item gets a discount applied to it and that value is added to ```discount``` which is returned.
5. Line 12 will cause an error because ```i``` is defined by ```let``` so it isn't accessible outside of the for loop.
6. Line 13 will cause an error because ```discountedPrice``` is defined by ```let``` so it isn't accessible outside of the for loop.
7. Line 14 will print out the rounded price value of the last value in ```prices``` because that will be the last time it is updated. Since it is initialized outside of the loop, it is accessible throughout the function.
8. This function returns an array of the final prices of each item in ```prices``` because every item gets a discount applied to it and that value is added to ```discount``` which is returned. All of the let variables aren't accessed outside of their scope so everything should run smoothly.
9. Line 11 will cause an error because ```i``` is defined by ```let``` so it isn't accessible outside of the for loop.
10. Line 12 would print out the length of the ```prices``` array because it is defined as a ```const``` and nothing tries to change it before line 12. The code won't get here though because of an error.
11. This will return an error because ```discounted``` is defined as a ```const``` which means line 8 causes an error when they try to update it.
12. a.```student.name;```
    b.```student\["Grad Year"\];```
    c.```student.greeting();```
    d.```student\['Favorite Teacher'\]\[name\];```
    e.```student.courseLoad\[0\];```
