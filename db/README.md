# Phase 1: Model Layer
You will want to reference the [Knex Docs](https://knexjs.org/) while working on this.

## Step 1: Set up your db
```
# install postgres on your machine
brew install postgresql

# switch it on
brew services start postgresql

# run your first migration
#   fyi: the cwd flag tells knex to use the dir ./db
knex migrate:latest --cwd ./db

# insert test data
knex seed:run --cwd ./db
```
This will give us a database named `my_app` with a single table named `pets`. That's great but we want our app to be able to track users as well as pets. 

To do this you will need to create two new migrations:
* one that creates a table called "pet_sitters" where each sitter has an id and a name field
* and one that adds a field to the `pets` table that corresponds to a sitter id

## Step 2: Create your model layer
I've gone ahead and created a model for the `pets` table for you. Finish the model for `pet_sitters`. When you're done with this all of the tests should be passing. 

## Step 3: Create a relationship between pets and pet sitters
Write a migration for this and write some tests that validate it in the model layer. 
