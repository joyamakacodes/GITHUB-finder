// Init github
const github = new Github

const ui = new UI
// Search User
const searchUser = document.getElementById('searchUser');

// Add event to search user
searchUser.addEventListener('keyup', function(e){
    const userText = e.target.value;
    if(userText !== ''){
        // make http call
        github.getUser(userText)
        .then(function(data){
            if(data.profile.message === 'Not Found'){
                // show alert
                ui.showAlert('')
            }else{
                // show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos)

            };
        })
    } else{
        ui.clearProfile
    }

});