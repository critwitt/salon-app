# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
u1 = User.create(name: "Dee Reynolds", email: "notabird@yahoo.com", password: "IAmNotABird")
u2 = User.create(name: "Dennis Reynolds", email: "goldengod@yahoo.com", password: "implication")
u3 = User.create(name: "Ronald Macdonald", email: "massaccumulator@yahoo.com", password: "ocularpatdown")
u4 = User.create(name: "Charlie Kelley", email: "cheeseluvr@yahoo.com", password: "illiterit")
u5 = User.create(name: "Frank Reynolds", email: "warthog@yahoo.com", password: "frak")

s1 = HairStylist.create(name: "Carol", specialty: "All")
s2 = HairStylist.create(name: "Gabby", specialty: "Blowouts")
s3 = HairStylist.create(name: "Kim", specialty: "Color")
s4 = HairStylist.create(name: "Gina", specialty: "Bridal Services")
s5 = HairStylist.create(name: "Peggy", specialty: "Treatments")

p1 = Product.create(name: "Redken All Soft Shampoo - 33.8 oz", price: 35.19, stock: 10, description: "Hair softening shampoo with argan oil for dry hair that gently cleanses and softens your dry, brittle hair. Formulated with Redken's Moisture Complex and Argan oil, this hair shampoo provides 15x more conditioning when used with All Soft Conditioner and All Soft Argan Oil Serum")
p2 = Product.create(name: "Redken All Soft Mega Shampoo", price: 24.00, stock: 3, description: "Redken's All Soft Mega Shampoo cleanses and moisturizes severely dry hair. This nourishing shampoo hydrates, smooths, and leaves hair with a soft and shiny finish.")
p3 = Product.create(name: "Redken Color Extend Shampoo - 33.8 oz.", price: 35.19, stock: 7, description: "An award-winning shampoo for color treated hair that maximizes color vibrancy while strengthening hair with daily shampooing. This shampoo makes haircolor last longer and will protect it from harsh environmental conditions. Gently cleanses and strengthens. Repels UVA/UVB rays and other environmental aggressors and provides anti-fade protection to optimize color durability and retention. Keeps haircolor radiant with mirror-like shine.")
p4 = Product.create(name: "Redken Color Extend Conditioner - 33.8 oz.", price: 26.39, stock: 14, description: "Maintain hair color and get tangle-free hair with brilliant and lasting shine with the Redken Color Extend 33.8 oz. Conditioner.")
p5 = Product.create(name: "Redken Acidic Bonding Concentrate Shampoo", price: 30.00, stock: 4, description: "Redken's Acidic Bonding Concentrate Shampoo is sulfate-free for all types of damaged hair looking to strengthen hair, reinforce weakened bonds, and lessen breakage.")
p6 = Product.create(name: "Redken Extreme Length Conditioner - 33.8 oz.", price: 35.19, stock: 11, description: "Redken's Extreme Length Conditioner with biotin strengthens damaged hair and helps hair to grow longer and stronger. Extreme Length Conditioner helps prevent breakage to promote your strongest, healthiest hair. Reduce breakage by 81% when using the full system of Extreme Length Shampoo, Extreme Length Conditioner, and Extreme Length Leave-In Treatment. Formulated with biotin and castor oil to help hair grow longer and stronger. Provides lightweight nourishment to the hair. Strengthens fragile strands and ends to promote strong, healthy hair. Gently conditions the hair and adds shine")
p7 = Product.create(name: "Redken Volume Injection Shampoo - 10.1 fl oz", price: 24.00, stock: 8, description: "Redken's Volume Injection Shampoo is a volumizing shampoo to create lift and body. This professional product creates weightless volume and leaves hair with a soft, shiny finish.")
p8 = Product.create(name: "Redken Brews Silver Charge Shampoo - 33.8 oz", price: 28.96, stock: 1, description: "Redken Brews Silver Charge Shampoo is a shampoo for grey and white hair. It is formulated with Malt extract to cleanse and eliminate impurities and to neutralize the hair of any unwanted yellow tones.")