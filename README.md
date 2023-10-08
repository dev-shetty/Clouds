# CLOUDS

<p align="center">
<img src="frontend\public\Clouds logo.png" width="250px" height="250px">
</p>

## Computer Legends Of the Unified Department

CLOUDS is an association of Computer Science Department in Sahyadri College of Engineering and Management.

- This website shows the details of office bearers representing clouds.
- The event tab it shows the upcoming events in our college

### Access the website here - [Clouds](https://cs-clouds.netlify.app)

### Instagram - [Clouds Instagram](https://instagram.com/clouds_scem?igshid=ZmRlMzRkMDU=)

### Linkedin - [Clouds](https://www.linkedin.com/in/department-of-cse-scem-b7190b256)

<br>

# Get Started

This website is built using react.js with vite.js and vanilla CSS and hosted using Netlify

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

## Folder Structure

### While contributing maintain the folder structure as shown below

<br>

To make changes in existing features

```
.
├── frontend
|   ├── src
|       ├── components
|           ├── <Folder-Name>
|               ├── <all-files>

```

To create a page

```
.
├── frontend
|   ├── src
|       ├── pages
|           ├── <page-name.jsx>

```

To make changes to the events tab

```
.
├── frontend
|   ├── src
|       ├── components
|           ├── Events
|               ├── events.js
```

Here, create a new object inside the **events** array, following the next id number and add the details of the event to the dedicated key (the schema is provided at the top of the file for the developer reference).

<br>

## How to contribute

1. Create a fork of this repository in your profile by clicking the fork icon in top-right corner.

2. Go the the forked repository in your profile and click the green color **Code** icon in right side and copy the url. 

3. Now Clone the repository to your pc by opening terminal in your desired folder and type

```bash
    git clone <url-copied>
```

4. Now a folder with the repository name will appear. Open it in your preffered code editor.

5. Run the following command to install all the dependencies

```bash
  cd .\frontend\
  npm i
```

6. Then create a new branch by using the following command (the command creates and switches to the new branch simultaneously)

```bash
    git checkout -b <new-branch-name>
```

7.  Now make the desired changes and after making changes or modification on to your code locally, you need to add these files to the staging area.

```bash
  git add <file-name>
```

8.  Once files added, you need to commit the changes to with an appropriate commit message.

```bash
  git commit -m "<your-message>"
```

9.  After commiting the changes, you need to push the changes

```bash
   git push origin <branch-name>
```

10.  Once you push the changes to your repository, the Compare & pull request button will appear in GitHub.

11. Click it and you'll be taken to a screen

12. Type a proper description and give the PR an appropriate title. Finally, Open a pull request by clicking the Create pull request button.

13. That's it. You have opened a PR. Wait for it to get merged.

<br>

<img src="frontend\public\Website.png">
