/*Suppose you have a file that you wish to import all of its contents into the current file. This can be done with the import * syntax.

Here's an example where the contents of a file named "math_functions" are imported into a file in the same directory:

import * as myMathModule from "math_functions";*/
myMathModule.add(2,3);
myMathModule.subtract(5,3);
And breaking down that code:

/*import * as object_with_name_of_your_choice from "file_path_goes_here"
object_with_name_of_your_choice.imported_function
You may use any name following the import * as portion of the statement. 
In order to utilize this method, it requires an object that receives the imported values. 
From here, you will use the dot notation to call your imported values.*/