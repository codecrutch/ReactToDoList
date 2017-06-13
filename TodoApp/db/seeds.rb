# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.create(title: "Make a Todo App", body:"Make a todo app that is better than Michael and Lora's", done: false)
Todo.create(title: "Go to Sleep", body:"ZZZZZZZZZZZZzzzzzzZZZZ(and no TV Sean)", done: false)
Todo.create(title: "Understand Thunking", body:"WhodaThunk Middleware was soo cool - said no one ever", done: false)
Todo.create(title: "Spoil GoT for Julian", body:"come on, Eilean, also Jon Dies", done: true)
Todo.create(title: "Say Hi to Dexter", body:"Say Hi to Dexter", done: true)
Todo.create(title: "Lunch Time Everybody", body:"Make sure this gets said at 3:45 verbatim", done: true)
