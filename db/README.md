# Phase 1: Model Layer

You will want to reference the [Knex Docs](https://knexjs.org/) while working on this.

## Step 1: Set up your db

```
# start the app
docker-compose up

# all the tests should pass
npm test
```

## Step 2: Create and run your first migration

So now we have a database named `my_app` with a single table named `pets`. That's great! Let's make it more interesting by tracking pet sitters as well as pets.

This migration will need to:

- create a table called "pet_sitters"
- where each sitter has an id and a name field

## Step 3: Create your model layer

I've gone ahead and created a model for the `pets` table for you. First, uncomment the first line and remove the `.skip` call in `./test/sitters.model.test.js`. Once you're done with that you can finish up the following in order:

- write a migration for a table called sitters
- seed that table with test data
  - make a script for making new seed files in `package.json`
- code a model for `pet_sitters`. When you're done with this all of the tests should be passing.
