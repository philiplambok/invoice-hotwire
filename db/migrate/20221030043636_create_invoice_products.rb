class CreateInvoiceProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :invoice_products do |t|
      t.references :invoice, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
      t.integer :unit

      t.timestamps
    end
  end
end
