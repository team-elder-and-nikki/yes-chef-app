# Yes Chef App

![Yes Chef! on Tablet](/client/public/yes_chef_app.PNG)

## Table of Content

- [About](#about)
- [Team](#team)
- [Team Contribution Guide](#team-contribution-guide)
    - [Installation](#installation)
    - [MVP Requirements](#mvp-requirements)
    - [Sprint Board Schedule](#sprint-board-schedule)
    - [Figma](#figma)
    - [Coding Conventions](#coding-conventions)
    - [Libraries/Frameworks](#librariesframeworks)
    - [Testing Documentation & Edge Cases](#testing-documentation--edge-cases)
    - [Backend API Endpoints](#backend-api-endpoints)
    - [Backend Mock Data](#backend-mock-data)
    - [Conventional Commits](#conventional-commit-guide)
    - [PR Review Guide](#pr-review-guide)
    - [Meeting Notes](#meeting-notes)    

# About

A smart restaurant kitchen management system where users can track orders from the POS to the kitchen. It manages the inventory in real-time, deducting ingredients automatically with each kitchen order completed. The Yes Chef application predicts preparation recommendations using historical order patterns based on the data of the archived kitchen orders. Using those archived orders and the inventory, the app can display the profit per dish, track waste metrics, and track ingredient costs. It also automatically reorders ingredients whenever they hit the ingredient threshold levels through integrating with supplier APIs.

# Team:

## Leads:
- [Elder](https://github.com/elderheim)
- [Nikki](https://github.com/code-guppy)

## Members:
- [Anton Shelkovnikov](https://github.com/Antosha9108)
- [Megan McNeill](https://github.com/bluethreadmade)
- [Richard Choi](https://github.com/choir241)
- [Sarah A](https://github.com/Sah11-0)
- [Thomas Harris](https://github.com/LodenH16)
- [Yassah Reed](https://github.com/Yassahr)


# Team Contribution Guide:

## Installation

1. Run `git clone` to clone the project to your local device

2. Pull from `main` using the `git pull` command

3. Run `npm install` to install all dependencies

3. Ensure you're on the [latest Node version](https://nodejs.org/en/download)

4. Create your `.env` file in the root folder and add your environment variables here (should look like `.env`). A MongoDB connection string and Spoonacular API key should be added.

5. To run the project (client and server) run `npm start` in root

## MVP requirements

To review the MVP requirements of this project broken down into digestible chunks, view the [MVP requirements docs.](https://docs.google.com/document/d/1L4ml2u57-JFyGDXHCbUYrBwTQwhRcvqpuD_KcdFK-lU/edit?tab=t.0)

## Sprint Board Schedule

![sprint board schedule](https://github.com/user-attachments/assets/867f5cab-6e62-4fd9-ac4c-4b766208bec6)

## Figma

To review the wireframe designs of the frontend, backend design, and design elements, [view the wireframe.](https://www.figma.com/design/Zn9hc9ws1SAeE7SzRspdTr/team-elder-and-nikki?node-id=0-1&p=f&t=119dg7GReS0V5zAs-0)

To review the sketch design flow of elements from the project, [view the Jamboard.](https://www.figma.com/board/pGe6VXc0myXOjrUHRYqJlh/team-elder-and-nikki-jamboard?node-id=0-1&p=f&t=JizhcF4JLHRyWV6B-0)

## Coding Conventions

View the [coding conventions doc](https://docs.google.com/document/d/1DktER3x-T0YrZp2GoKP3_dsEISIFfcn4lSwKhDIgCaE/edit?tab=t.0) to see what coding conventions to follow for this project.

## Libraries/Frameworks

To see library or framework options for a variety of elements in an application, see the [library/framework research docs.](https://docs.google.com/document/d/1sZcluuOlHF7ttIkxly3LVJzM1CVMBsbvdvfuaCZV2jY/edit?tab=t.0#heading=h.5mqau96ajv7y)

## Testing Documentation & Edge Cases

Comprehensive testing documentation and anticipated edge cases are listed [here](https://docs.google.com/document/d/1SBnXl-W_sP6PCThaKONXHr4OOzeANBDImqPwfOQrvQc/edit?usp=sharing).

## Backend API Endpoints

View and update the [Endpoints Documentation](https://docs.google.com/document/d/1dMqOEiEz2Khetr4HKWKi1XJLsVp8Jo-X4btzkiniiZw/edit?usp=sharing) as we progress through building the app.

## Backend mock data

View the [Menu and inventory arrays](https://docs.google.com/document/d/1kXmBnlvrd-d3it6-zWGigqS6M3VL5ouMVKxu_-tARbM/edit?tab=t.0) for the backend database and mock data for the menu and inventory items.

## Conventional commit guide

To see how to make a conventional commit, read the [Conventional commit guide.](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)

## PR review guide

Go through the [PR Review guide](https://github.com/mawrkus/pull-request-review-guide) to see how to approach reviewing PRs.

## Meeting notes

[Standup meeting notes](https://docs.google.com/document/d/1i2KYr77Qpg5xUJ2sj-EbPQnzb8J6mrjTovT8i4zI2f8/edit?tab=t.0) are where all the notes will be stored for all our team's standups.
