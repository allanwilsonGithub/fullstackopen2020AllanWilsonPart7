create keys
add pub key to github

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa

ssh -T git@github.com

USE SSH TO CLONE!!!
git clone git@github.com:allanwilsonGithub/fullstackopen2020AllanWilsonPart7.git