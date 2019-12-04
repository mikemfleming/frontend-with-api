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
After running the above you should be able to run `npm test` and see that all the tests are passing.

## Step 2: Create and run your first migration
So now we have a database named `my_app` with a single table named `pets`. That's great! Let's make it more interesting by tracking pet sitters as well as pets. 

This migration will need to:
* create a table called "pet_sitters"
* where each sitter has an id and a name field

## Step 3: Create your model layer
I've gone ahead and created a model for the `pets` table for you. First, remove the `.skip` call in `./test/models.test.js`. Create and finish a model for `pet_sitters`. When you're done with this all of the tests should be passing. 

## Step 4: Create a relationship between pets and pet sitters
Write a migration for this and write some tests that validate it in the model layer. 
