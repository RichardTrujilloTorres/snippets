
// print_table.js
// Prints a table.

/*
    TO-DO: 
        Allow element passing.
        jQuery version.
        Function members (parameters) validity check.
*/

/*
    tbHeader:   Array holding headers.
    tbField:    Bi-dimensional array holding fields.
    tbTitle:    Table title.
    rows:       Number of rows to construct.
    col:        Number of columns to construct. 
*/
function printTable(rows, cols, 
    tbHeader, tbField,
	tbTitle) {


        document.write("<h3>" + tbTitle + "</h3>");
        document.write(
        "<table class='table table-hover'>" +
            "<thead>");

        // header
        document.write("<tr>");
         for (var i = 0; i < rows; i++) {
         	document.write("<th>" +
                    tbHeader[i] +
                    "</th>" );

         }
         document.write("</thead><tbody>");
           
        // body    
         for (var i = 0; i < cols; i++) {
         	 document.write("<tr>");

         	 for (j = 0; j < rows; j++) {
         	 	document.write("<td>"); 
	         	document.write(tbField[i][j]);
	            document.write("</td>");
	         	 }

            document.write("</tr>")
         }

         document.write("</tbody></table>");
}
