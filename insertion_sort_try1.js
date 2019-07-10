//                                          INSERTION SORT
//                                       Time Complexity = O(n)
//due to one for loop
//define and declare an array

const num_arr = [67, 58, 84, 93, 1, 12, 90, 42, 11, 35, 8, 9];

//run a for loop up to the length of the array

for (var i=1; i<num_arr.length; i++)
{
    //declare a variable named key and store the i'th element
    
    var key = num_arr[i];

    //declare a variable j and make it one less than i
    
    var j = i - 1;
    
    //run a while loop testing condition

    while (j>=0 && num_arr[j]>key)
    {
        //if the conditions are statisfied then do perform the following instruction

        num_arr[j+1] = num_arr[j];
        
        //reduce j by 1

        j = j-1;
    }

    //now assign the [j+1] th element the value of key

    num_arr[j+1] = key;
}

//print the sorted array

console.log(num_arr);