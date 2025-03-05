# User Stories

## Overview 
This document contains the users stories for Yes Chef for the following users: kitchen staff, cashier and management
---

## User Story: Cashier
### Feature: Ordering Screen
#### User Story #
As a restaurant cashier, I want to be able to navigate through all the menu items and the food categories in the most frictionless method for myself and be able to add any menu items using the POS systems and send them to the kitchen using the cart menu interface. To help keep the app design focused on a good user experience when it comes to the layout of the page sections
Using the application as a restaraunt cashier to see how friendly the UI is during rush hour or slow hours

**Acceptance Criteria:**
[]Navigate through menu categories - ex: appetizers, pasta, pizza, entrees, desserts
[]Navigate through menu items
[]Add menu items to code
[]Send kitchen menu items

---
## User Story: Management
### Feature: Ingerdient Cost Tracking
#### User Story # 
As a restaurant manager, I want to track ingredient prices using the menu engineering dashboard so that I can better understand how money is being spent on ingredients

**Acceptance Criteria:**
[]I see a list of ingredients
[]I see the amount of ingredient ordered
[]I see the cost of each ingredient
[]I see the total cost of the order

### Feature: Profit Per Dish
#### User Story #
As a Manager I want to view the profitability of each dishusing the menu engineering dashboard so that I can see which dishes are more or less profitable in one place
**Acceptance Criteria:**
[]I see each dish
[]I see the total price of each dish
[]I see the total cost of ingredients
[]I see the net profit of each dish

### Feature: Waste Metrics
#### User Story # 
As a restaurant manager, I want to see how much money is lost due to ingredient waste using the menu engineering dashboard so that I can optimize inventory usage and reduce unnecessary waste.
**Acceptance Criteria:**
[]display current inventory
[]display how much is wasted
[]display how much money is lost due to waste

---

## User Story: Kitchen Staff
### Feature: Order Status Management
#### User Story #
As kitchen staff, I should be able to quickly identify new/unstarted orders so that the order log can be maintained to prevent duplicate work(two team members working on the same ticket) or longer wait times for customers(orders taking long time to be started)

**Acceptance Criteria:**
[]user can easily detect what ticket are new/unstarted
[]user can easily detect what ticket have been started
[]user can see when ticket was placed

### Feature: Order Progress Tracking
#### User Story #
As kitchen staff, I should be able to mark a ticket as in progress so that other team members can know the order has been started to prevent others from working on the same ticket.
**Acceptance Criteria:**
[]user can place ticket in progress to indicate order is being started

### Feature:Order Completion Tracking
#### User Story #
As kitchen staff, I should be able to mark tickets as complete so that the front staff can know when the order is ready for the customer to prevent food waste and excessive wait times for orders

**Acceptance Criteria:**
[]user can mark ticket as complete


### Feature: Food Waste Interface
#### User Story #
As kitchen staff, I should be able to log food waste so that a proper inventory can be kept to prevent running out of ingredients during prep and workday 
**Acceptance Criteria:**
[]User can log the ingredient and the quantity of ingredient that was wasted
[]User can change the quantity of items in inventory manually

### Feature: Predictive Prep Pop-ups
#### User Story #
As a kitchen staff member, I would like to be alerted when and what menu items  need to be prepped to prevent order backlog during peak hours

**Acceptance Criteria:**
[]user is prompted when menu items need to be prepared
[]user can acknowledge items have been prepped and clear alert