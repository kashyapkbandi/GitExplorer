import { LightningElement } from 'lwc';

export default class YdContainer extends LightningElement {
 

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
            console.log(data);
          });
    }


}