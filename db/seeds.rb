# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
List.create [
  { name: 'sneakers', category: 'shoes', price: 9999 },
  { name: 'baseball', category: 'sports', price: 1095},
  { name: 'pen', category: 'office', price: 200}
]