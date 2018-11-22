#### Scenario 1
committed a bunch of files and realised that the commit message you entered is actually not clear
>git commit --amend -m “New commit message”

#### Scenario 2
Let’s say that you wanted to commit six files but, by mistake, you end up committing only five files.
<code>
* git add file6
* git commit --amend --no-edit
* --no-edit means that the commit message does not change.
</code>
