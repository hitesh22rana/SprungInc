# TweetX

This Frontend Project is made by using React JS. All the good practices are implemented while making this App.
<br>
<br>

## Practices:-

1) Proper folder structure is used to isolate all the components and pages from each other.
2) For Components and Pages files, JSX extension is used, so that we can separate components and Pages from other JS Files.
3) Modular SCSS is used, so that no style classes overlap with each other.
4) Each folder is named after individual Page/Component and further each file contains.
  - ComponentName.jsx
  - ComponentName.module.scss

<br>

## Code Structure :-

[src](/src/) folder contains all the main files and folder

Further [src](/src/) folder is divided into 6 sections :-

1) [App](src/App.js) :- It is the main file which contains all the routes.

2) [Pages](/src/pages/) :- It contains all the pages.
 - [Login](/src/pages/Login/)
 - [Signup](/src/pages/Signup/)
 - [Feed](/src/pages/Feed/)
 - [Users](/src/pages/Users/)
 - [Profile](/src/pages/Profile/)
    
3) [Components](/src/components/) => It contains all the components that are required on different [Pages](/src//pages/).

4) [Contexts](src/contexts/) => It contains the context that are to be managed inside the different components. Basically, it is a state management hook. The reason behind using context API's for the state management is because it is light weight and as per now, there are not that much states to be managed, but when the project scales, we can use state managements libraries like **Redux**.

5) [Dummy Data](src/dummyData/) => It contains all the dummy data. For now, data is hard coded as no backend is integrated but once the backend will be integrated, we will no longer need this.

6) [Assets](src/assets/) => It contains all the required images which are used in various [Pages](/src/pages/) and [Components](/src/components/).