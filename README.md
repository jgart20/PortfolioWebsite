# Jeremy Gart Portfolio Website

## Requisite software:

#0: npm, follow these instructions: https://www.npmjs.com/get-npm

#1: express.js, use npm install

#2: node.js, use homebrew to install

#3: PUG, use node.js to install

#4: Bootstrap, use npm install

#5: nodemon, not necessary but useful, use npm install

#6: serve-favicon, use npm install

#7: General framework was acquired from a github template for PUG websites: https://startbootstrap.com/themes/resume/. This can be installed, or everything may be hard coded.

#8: The original setup of the folders and app.js file was from a youtube series on the channel "Traversy Media" titled "Node.js and Express From Scratch": https://www.youtube.com/watch?v=k_0ZzvHbNBQ&list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp. These may be watched for the user to gain basic knowledge of these programs, along with their integration into the PUG template engine. 

## Files within the project:

Note- not every file within this project has been modified. Many were installed along with the general template that I used and have not been tampered with in any way.

### #1: App.js
  The purpose of this file is to provide a back framework for the routing of the website. 
  
### #2: Layout.pug
  This is where the actual PUG/Bootstrap code lies. If a change is to be made to the site, this is the place where it must be modified before being uploaded to the server with an scp command.
  
### #3: Img Folder
  This folder is where any images used on the website are put. For now, only the profile photo is used, but if more photos are added later, they must be put into this folder.
  
### #4: Other Files
  There can be modifications made to other files within this project path. However, for the scope of this project, the only files that require creation/modification are the ones listed above.

## Other Necessary Programs for Setup:

### #1: Godaddy.com
  Not strictly necessary, but assists in buying a domain name for a relatively cheap price. Once bought, the specific IP address can be required and linked up to a remote server. In my case, I used Kent Denver's server.
  
#### 2: DigitalOcean
  Again, this can be substituted for a different program. However, it is necessary regardless to acquire a program that can create droplets, a root for the server, and manage the backend network requirements for the domain. A plan must then be bought that charges monthly, with cost depending on how large the size of the website is.

### #3: Terminal
  This will be used throughout the program in order to install and manage the entire site, and every one of its components. It is necessary to use ssh in order to tap into the server-side of the website, but the project is still majority on localhost until near the end of the website's creation.

#### 4: GitHub
  This is not completely necessary, and I did not use it until the completion of the project, but it does assist in organization and workflow of the project. If this is worked on by multiple people, GitHub can assist the smoothness of the entire project greatly.

## Successful Run:
visit www.jeremygart.com
![image of successful website rendering]
(https://github.com/jgart20/PortfolioWebsite/blob/master/Screen%20Shot%202019-12-14%20at%203.41.21%20PM.png)
