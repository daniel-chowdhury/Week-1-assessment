/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

const gitDefinition = "Git is a version control system which allows the preservation of the history of all the changes to a code file, it does so by creating a virtual repository and saving all the files of a particular directory in that repository"

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = "Git Hub is an online system for uploading code files and also preserving the history of all the changes to those code files. It is possible to upload files from loca Git repo to Git Hub, and download files from Git Hub to local Git repo"

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = "git init command initiaizes a particular directory in the local computer in order to create a virtual repository of that directory"

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

const gitCloneDefinition = "git clone creates an identicaly copy of a Git Hub online repository into someones local computer, in the form of a directory"

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = "git status displays the state of the virtual git repository that is pointing to the working directory in the terminal, and lets us see which files in the directory are not being tracked by Git"

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = "git add will prepare files to upload to the online Git Hub repository from someones local computer virtual git repository. If someones does git add ., and then git push, that will take all the files in the particular directory that terminal is pointing to, if someones does git add file_name.file_extension, and then git push, that will take only that one file"

gitAddCode = "git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

const gitCommitDefinition = "git commit is used whenever a change is made to a file, and creates different versions of the file, also known as branches, whenever the git commit command is used, and also allows us to add a comment describing if any change is made"

const gitCommitCode = 'git commit -m "initial commit"'


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

const gitPushDefinition = "git push command will upload file or files to the online Git Hub repository from someones local computer virtual repository."