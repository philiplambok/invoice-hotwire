# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

amounts = [100_000, 200_000, 300_000, 400_000, 500_000, 250_000]

100.times do
  Product.create!(name: Faker::Food.dish, amount: amounts.sample)
  customer_name = Faker::Name.name
  Customer.create!(name: customer_name, email: Faker::Internet.email(name: customer_name))
end
