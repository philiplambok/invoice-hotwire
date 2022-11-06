# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 20_221_030_043_636) do
  create_table "customers", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "invoice_products", force: :cascade do |t|
    t.integer "invoice_id", null: false
    t.integer "product_id", null: false
    t.integer "unit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["invoice_id"], name: "index_invoice_products_on_invoice_id"
    t.index ["product_id"], name: "index_invoice_products_on_product_id"
  end

  create_table "invoices", force: :cascade do |t|
    t.integer "customer_id", null: false
    t.integer "number"
    t.bigint "total"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["customer_id"], name: "index_invoices_on_customer_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.bigint "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "invoice_products", "invoices"
  add_foreign_key "invoice_products", "products"
  add_foreign_key "invoices", "customers"
end
