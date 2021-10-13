const products = [
    {
        category: "Produce",
        name: "Honeycrisp Apple",
        Brand: "Whole Foods Market",
        marketPrice: 10,
        sellingPrice: 5,
        priceBy: "/kg",
        img: "https://m.media-amazon.com/images/I/71PxRvQMaoL._SX679_.jpg"
    },
    {
        category: "Produce",
        name: "Organic Banana",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/kg",
        img: "https://m.media-amazon.com/images/I/61JP68CTgKS._SX679_.jpg"
    },
    {
        category: "Produce",
        name: "Organic Green Seedless Grapes",
        Brand: "Whole Foods Market",
        marketPrice: 13,
        sellingPrice: 10,
        priceBy: "/kg",
        img: "https://images-na.ssl-images-amazon.com/images/I/81u0bnmfTdL.AC_SL240_.jpg"
    },
    {
        category: "Produce",
        name: "Large Organic Hass Avocado",
        Brand: "Whole Foods Market",
        marketPrice: 10,
        sellingPrice: 9,
        priceBy: "/kg",
        img: "https://images-na.ssl-images-amazon.com/images/I/81LKLCmdAQL.AC_SL240_.jpg"
    },
    {
        category: "Produce",
        name: "Pomegranate Conventional",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/81GYrTPynbL.AC_SL240_.jpg"
    },
    {
        category: "Produce",
        name: "Organic Celery",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/kg",
        img: "https://images-na.ssl-images-amazon.com/images/I/71ls9H3aDvL.AC_SL240_.jpg"
    },
    {
        category: "Produce",
        name: "Organic Tomato On-The-Vine",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/kg",
        img: "https://images-na.ssl-images-amazon.com/images/I/81avkS31xRL.AC_SL240_.jpg"
    },
    {
        category: "Produce",
        name: "Organic Cauliflower",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/817uoYw7ElL.AC_SL240_.jpg"
    },

    ///////////////meat///////////////////////
    {
        category: "Meat & Seafood",
        name: "Pine Manor Whole Chicken",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/612jiEdQ58L.AC_SL240_.jpg"
    },
    {
        category: "Meat & Seafood",
        name: "Beef Ribeye Steak Boneless Pasture Raised",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/51vJoFPHR0L.AC_SL240_.jpg"
    },
    {
        category: "Meat & Seafood",
        name: "Tilapia Fillet Farm Raised",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/61IW7kwF4LL.AC_SL240_.jpg"
    },
    {
        category: "Meat & Seafood",
        name: "Tilapia Fillet Farm Raised",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/61IW7kwF4LL.AC_SL240_.jpg"
    },
    {
        category: "Pantry",
        name: "Whole Foods Market, Organic Orzo",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/61XPMMRoG2L.AC_SL240_.jpg"
    },
    {
        category: "Pantry",
        name: "365 by Whole Foods Market, Noodle Egg Extra Wide Organic",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/711U8QmPNML.AC_SL240_.jpg"
    },
    {
        category: "Breads & Bakery",
        name: "Dave’s Killer Bread Organic 21 Whole Grains and Seeds Bread",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/61Pwwe4NBbL.AC_SL240_.jpg"
    },
    {
        category: "Breads & Bakery",
        name: "Whole Foods Market, Brioche Hot Dog Buns",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/819yq30rnhL.AC_SL240_.jpg"
    },
    {
        category: "Breads & Bakery",
        name: "365 by Whole Foods Market, Tortillas Flour Burrito Size Organic 6 Count",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/81AOSlkDNPL.AC_SL240_.jpg"
    },
    {
        category: "Dairy, Cheese & Eggs",
        name: "365 by Whole Foods Market, Milk Whole Organic",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/71pokGgV2XL.AC_SL240_.jpg"
    },
    {
        category: "Dairy, Cheese & Eggs",
        name: "Organic Valley Whole Milkk",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/81+A14C2CkL.AC_SL240_.jpg"
    },
    {
        category: "Snack Foods",
        name: "365 by Whole Foods Market, Tortilla Chips Organic White Corn",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/717BiYvC0-L.AC_SL240_.jpg"
    },
    {
        category: "Snack Foods",
        name: "365 by Whole Foods Market, Chip Veggie",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/71TITpDUdnL.AC_SL240_.jpg"
    },
    {
        category: "Water",
        name: "Essentia Bottled Water, 1.5 Liter Bottle; 99.9% Pure, Infused with Electrolytes for a Smooth Taste, pH 9.5 or Higher; Ionized",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/61VLkC+QsSS.AC_SL240_.jpg"
    },
    {
        category: "Sports & Energy Drinks",
        name: "vitaminwater zero squeezed, electrolyte enhanced water w/ vitamins, lemonade drink",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/71+d31bATvL.AC_SL240_.jpg"
    },
    {
        category: "Tea",
        name: "Yogi Tea Sweet Tangerine Positive Energy",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/717fbjW5d9L.AC_SL240_.jpg"
    },
    {
        category: "Tea",
        name: "Hoplark, Hoptea Sparkling The Calm One",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/41n-Eut-yzL.AC_SL240_.jpg"
    },
    {
        category: "Juice",
        name: "Simply Orange Juice, 52 fl oz, 100% Juice Not from Concentrate, Pulp Free",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/81eqC+9aewL.AC_SL240_.jpg"
    },
    {
        category: "Soft Drinks",
        name: "Poppi Raspberry Rose Prebiotic Soda",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/71Y9923EBQL.AC_SL240_.jpg"
    },
    {
        category: "Soft Drinks",
        name: "Poppi Lime Ginger Prebiotic Soda",
        Brand: "Whole Foods Market",
        marketPrice: 12,
        sellingPrice: 10,
        priceBy: "/piece",
        img: "https://images-na.ssl-images-amazon.com/images/I/81s41dtQ7RL.AC_SL240_.jpg"
    },
]

module.exports = products;