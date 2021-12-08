import { LightningElement } from 'lwc';

export default class GitExplorer extends LightningElement {
selectedRepo={};
avatarURL;
login;
htmlurl;
    showrepoDetails(event)
    {
        console.log("Listender involked.....");
        this.selectedRepo =JSON.parse(JSON.stringify(event.detail));
        this.avatarURL = this.selectedRepo.owner.avatar_url;
        this.login = this.selectedRepo.owner.login;
        this.htmlurl = this.selectedRepo.owner.html_url;
        console.log(this.selectedRepo.owner.avatar_url);
    }
}