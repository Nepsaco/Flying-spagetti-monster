class CreateMonsters < ActiveRecord::Migration[6.0]
  def change
    create_table :monsters do |t|
      t.string :img
      t.string :quote

      t.timestamps
    end
  end
end
