# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

stack_overflow = Resource.create(name: "StackOverflow", url: "https://stackoverflow.com/")
free_code_camp = Resource.create(name: "Free Code Camp", url: "https://www.freecodecamp.org/")
codecademy = Resource.create(name: "Codecademy", url: "https://www.codecademy.com/")

Comment.create(body: "good but random", rating: 4, resource: stack_overflow)
Comment.create(body: "not a huge fan", rating: 2, resource: stack_overflow)
Comment.create(body: "it is free woohoo!", rating: 5, resource: free_code_camp)
Comment.create(body: "great resource", rating: 5, resource: codecademy)
Comment.create(body: "good css curriculum", rating: 3, resource: codecademy)