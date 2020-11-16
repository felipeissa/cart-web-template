# Challenge


### Create an Angular 8 or above web APP that gets and displays information from RockSpoon's Search API

- The app will have two screens and should be responsive:
  - The first one allows the user to search for items (plates) using RockSpoon Search API (https://dev-api.rockspoon.io/search/v2/composed). The search can be performed using the search text field. 
  - The second screen displays information when an item is selected from the list.


- The hide option will remove that entry from the list. Ideally this should be persistent across multiple searches. In other words, if the user decides to hide on item it won't appear anymore. 
- Please consider the mockup below as a guide on how the page should be created for both big and smaller screens.


![Web.png](https://github.com/spoonrocker/cart-web-template/blob/main/Web.png)

![Mobile.png](https://github.com/spoonrocker/cart-web-template/blob/main/Mobile.png)

### **The APP must have** ###

* __List of items page__: You can get it using the following call:

```sh
curl --location --request POST 'https://api.rockspoon.io/search/v2/composed' \
--header 'key: {key}' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--data-raw '{ 
    "entity": "item",
    "page": 1,
    "size": 10,
    "params": {
        "term":["burger"],
        "tags": [ "cuisine\u003eamerican"]
    }
}'
```

* The page must get and display paginated results, with endless/infinite scroll (incrementing the `page` parameter).
* For each item, the App must show: Item's name, description, picture, and number of spoons.
* When selecting an item, the item details page must be displayed.
   
  
- __Item details page__. You can get it using the following call: 
```sh
curl 'https://api.rockspoon.io/catalog/consumer/item/{itemId}' \
  -H 'Accept: application/json' \
  -H 'key: {key}'
```
  * The item's page must show: Item's name, tags, price, availableFor, and sizes and prices.


### MUST have
* Angular 8 or above
* Angular Material Usage
* State Management using NGXS (Preferably) or NGRX
* App should run without any errors

### Nice to have
* Bootstrap css usage
* Web Workers usage
* Angular Universal usage
* Unit tests or screen tests
* Functional tests (that browse the app as a use case)


### Submission process

You must implement the code and send a pull request to the repository. 
