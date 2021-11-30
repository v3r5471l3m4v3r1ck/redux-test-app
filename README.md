# ReduxTestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Requirements

 - Installed NodeJS 12+
 - Install angular globally: `npm i -g @angular/cli`
 - Install all dependencies: `npm i`
 - Run with: `ng serve`
 - You can check appliaction at: `http://localhost:4200/`
 - Optionaly you can download Redux Dev Tools: `https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Info

### Compoennts

Localized in ./app/components folder - cart, items and item. Each Angular (Web) Component consists of:
 - .ts file where logic of component is stored
 - .spec.ts file where testing logic of component is stored
 - .html file where template is stored, which later will be translated to pure HTML
 - .scss file where styles are stored
For you enough should be to check both .ts and .html files.

AppComponent is by default root component of whole appliaction (first component to be displayed inside body of index.html file located in root of this project) located inside ./app folder.

Items and Cart are used as Pages (assigned to specific routes - displayed in `<router-outlet></router-outlet>` inside root component) where Item is used inside Items component.


### Modules

Modules are what name suggest. Modules of application (by default you have at least one module) are data containers where certain metdata is defined informing angular how to build such module or application.

We have only one module inside ./app folder where we define our components, root component and Redux Framework/Library.

State of our application is defined in app.module.ts - there's only global one state of application that is split into smaller states.

### Models

Plain and simple models used in our appliaction are stored inside ./app/models folder.

### Services

Services or Repositories are stored inside ./app/services folder - they are mocked to works like API requests.

### Redux

Redux is stored inside ./app/redux folder and it consists of (and should be read in that order):
 - States: smaller states of application that put together create our one application global state (states are considered immutable and shouldn't be modified by anything else than reducers)
 - Actions: list of actions that are available to call for each smaller state
 - Effects: side-effects (side-effects are such actions that mutate data with help from outside of application - like calling an API) of certain actions are defined there (you should not mix side-effect actions with normal actions, but if you handle same action in effects and reducers then it will be handled by both in this order: effects -> reducers)
 - Reducers: those are pure functions that modify our state (only reducers can modify state of our application and when doing so it's considered a good practice to create new object that were modified instead of updating existing ones)
 - Selectors: selectors are read-only functions that can subscribe to state of our application and retrieve and informat us of anything that changes inside state (at least to the parts we're subscribed to)
 - States: this is a new method in NgRx to create states by moving from functions spread inside 5 different folders toward one class that takes care of everything what's happening inside each smaller state (new and old way is not compatibile with each other, but they can be used alongside each other without any issue)

It's possible to treat those actions as logs (they carry data and can be serialized easily). You can subscribe to some specific acctions inside effects and display some alerts for the user. You can revert changes to the application up to it's initialization (first visit of currently running application) by retrieving all actions. Sky is the limit as they say - effects are place where you can get creative and do some funky stuff there.

Key Characteristics of Redux:
 - Immutability
 - Single Global State
 - Unidirectional Flow (Component -> Action -> Effects -> Reducers -> State -> Selectors -> Component -> Action ...)
 - Clearly defined places for retrieving data (Selectors), modifing data (Reducers), calling api (Effects), state of our appliaction (States) and all aviable actions in our application (Actions)
 - Business Logic that is split from Views and Component - this way you don't duplicate data and logic when same model or view is present in other places of application (Big WIN!)