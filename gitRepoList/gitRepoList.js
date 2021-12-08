import { LightningElement } from 'lwc';

export default class GitRepoList extends LightningElement {
    
    //default the button pressed is false.
buttonClicked = false;
cssClass =  'slds-button  slds-button_success'; 
connectstatus =  'Connect....';
data=[];
selectedObject={};

handleselection(event)
{
    console.log(event.currentTarget.dataset.id);
    this.data.forEach(element => {
        if(element.id == event.currentTarget.dataset.id)
        {
            // when the selected item matches, Push the entire Element in an object.
            this.selectedObject = element;
       //     console.log(this.selectedObject.owner.login);
            return true;
        }
    });
       // dispatch the event with the selected object data
       const reposelectionEvent = new CustomEvent('reposelection',{detail : this.selectedObject});
       // dispatch it. 
       this.dispatchEvent(reposelectionEvent);
       console.log("reposelection Event dispatch done......");
}

    handleToggle(event)
    {
        if(!this.buttonClicked){
            this.buttonClicked = true;
        this.cssClass = this.buttonClicked ? 'slds-button  slds-button_destructive' : 'slds-button  slds-button_success'; 
        this.connectstatus = 'Disconnect....';
        // fetch the endpoint data
        this.handleFetch();
    }else{
        this.buttonClicked = false;
        this.cssClass = this.buttonClicked ?  'slds-button  slds-button_destructive' : 'slds-button  slds-button_success'; 
        this.connectstatus = 'Connect....';
    }

    }

    handleFetch()
    {
        let endPoint = "https://api.github.com/repositories?since=364";
        fetch(endPoint, {
          method: "GET"
        })
          .then((response) => response.json()) 
          /* response.json() gives us back a promise
          we need to process the promise in .then()*/
          .then((data) => {
            this.data = data;
        //    console.log(this.data);
          });
    }
 
    
}