Why is it beneficial to separate your routes, models, and database connection into different directories?
clean code , well organized and east to read.

What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?
Put replaces the whole thing . All the data is sent even if there was no change. Patch, you only sent the parts you want updated. 

In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why? you can said a "successfully deleted" message or a code in the 200's  to confirm it as done. 