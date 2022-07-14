class Github {
    constructor(){
        this.client_id = '17dd5686b6068e616b7a';
        this.client_secret = '498805bc35d729951fee89a12c4b100ea9c7a4bf'
    }

    async getUser(user){
        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        
        const repos = await repoResponse.json();
        return{
            profile,
            repos
        }
    }
}