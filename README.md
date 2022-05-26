# TweetX

This Frontend Project is made using React JS with all the good practices are implemented while making this App.
<br>
<br>
## Practices :-

To Isolate all components and Pages from each other proper folder structure is used as well as JSX extension for Components and Pages files are used so that we can seperate Components and Pages from other JS Files and Modular SCSS is used so that no style classes overlap with each other.

Every Page and Component is divided in this structure :-

FolderName :- ComponentName
  - ComponentName.jsx
  - ComponentName.module.scss
<br>
<br>
## Code Structure :-

[src](/src/) folder Contains all the main files and folder

Further [src](/src/) folder is divided into 5 sections :-

1 [Pages](/src/pages/) :- It Contains all the pages.
  - [Login](/src/pages/Login/)
  - [Signup](/src/pages/Signup/)
  - [Feed](/src/pages/Feed/)
  - [Users](/src/pages/Users/)
  - [Profile](/src/pages/Profile/)
    
2 [Components](/src/components/) => It Contains all the compnents that are required on different [Pages](/src//pages/)

3 [Contexts](src/contexts/) => It Contains all the Context that are to be managed inside the different components basically it is a state management hook. And, the reason to use context API's for the state management is because it is light weight and as per now there are not that much states that are to be managed, but when the project scales we can use state managements libraries like **Redux**.

4 [Dummy Data](src/dummyData/) => It Contains all the dummy data. For now, data is hard coded as no Backend is integrated but once backend will integrated we will no longer need this.

5 [Assets](src/assets/) => It contains all the required Images which are used in Various [Pages](/src//pages/) and [Components](/src/components/).