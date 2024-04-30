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
12. a.```student.name;``` <br>
    b.```student["Grad Year"];``` <br>
    c.```student.greeting();``` <br>
    d.```student['Favorite Teacher'][name];``` <br>
    e.```student.courseLoad[0];``` 
13. a.'3' + 2 = **'32'** becuase the 3 is a string so it is concatenated with the number value. <br>
    b.'3' - 2 = **1** because 3 is converted to a integer so that 2 can be subtracted from it. <br>
    c. 3 + null = **3** because null doesn't add anything to 3 so it just returns 3. <br>
    d.'3' + null = **'3null'** because the string 3 just takes null as a string to append. <br>
    e.true + 3 = **4** because true can be typecasted to an integer of 1 and one plus three is 4. <br>
    f.false + null = **0** because false is treated as a number and so null becomes irrelevant. <br>
    g.'3' + undefined = **'3undefined'** since 3 is a string, undefined just becomes appended to the string. <br>
    h.'3' - undefined = **NaN** subtraction turns both into integers, and since undefined is NaN in numeric form, 3 - it gives us that value.
14. a.'2' > 1 -> **true** because '2' can be typecasted into the integer 2 which is greater than 1. <br>
    b.'2' < '12' -> **false** since these are both strings, the first character's compared first and since '2' > '1', this equation is false. <br>
    c. 2 == '2' -> **true** due to the fact that '2' typecasted is 2 which equals 2. <br>
    d. 2 === '2' -> **false** because three = signs will stop since 2 and '2' aren't the same type. <br>
    e. true == 2 -> **false** since true as a number is 1, 1 doesn't equal 2. <br>
    f. true === Boolean(2) -> **true** since the Boolean of 2 is true which makes it the same type and value as true.
15. Three equal signs mean that we are not type casting at all so if left and right side are different types, they automatically return false. Two equal signs will typecast if possible in order to compare the sides.
16. *In JS file*
    
