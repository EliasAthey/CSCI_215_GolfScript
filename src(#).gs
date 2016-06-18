'racecar':a:b;																	#assigns the input string to variables a and b

a,1-:s:j;																		#finds the size of a, subtracts 1, and assigns that value to s and j

{a 0=a s==}:f;																	#f is a function that returns(puts on the stack) 1 if the first and last letter of a 																								#are the same, 0 otherwise

{f{a 1>s 1-<:a;s 2-:s;}~}j 1+2/*												#runs f and then removes the first and last letters of a, and changes s appropriately - 																							#this whole block runs (j+1)/2 times

{{b' is a palindrome'+:o;}{b' is not a palindrome'+:o;{.;}:if;}if} j 1+2/*		#looking at a stack of 1's and/or 0's. for each entry > if 1 then o says palindrome 				    																			#if 0 then o says not a palindrome and the definition of 'if' is changed to pretty 																							#much do nothing. I did this so that once a 0 is found in the stack, o will not be 																							#changed again.

{;}j 2** o																		#empties the stack and puts o on the stack, be default the contents of the stack are printed 																						 #when the program terminates
