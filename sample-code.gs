a 1>
#the string is put on the stack, changed to only index 1 and higher

s 1-<:a;
#the size of the string minus 1 is put on the stack, takes the string on the stack and changes it to characters less than/equal to index of the number on the stack
#reassigns this new string (missing first and last characters) to a

s 2-:s;
#subtracts 2 from the size of the string and reassigns that value to s

