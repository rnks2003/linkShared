use signDesk

db.agg.find({store:"Store A"})

db.agg.find({price:{$gt:100}})

db.agg.find({category:"Clothing"})

db.agg.aggregate([
    {
        $group:{
            _id:"$category",
            total_revenue:{
                $sum:{
                    $multiply:[
                        "$price",
                        "$quantity"
                    ]
                }
            }
        }
    }
])

db.agg.aggregate([
    {
         $group:{
             _id:"$store",
             noSales:{
                 $count:{}
             }
         }   
    }
])

db.agg.find({},{_id:0,product:1,price:1})

db.agg.aggregate([
    {
        $project:{
            product:1,
            ProductCategory:"$category",
            price:1,
            quantity:1,
            store:1,
            date:1
        }
    }
])

db.agg.aggregate([
    {
        $match:{
            category:"Electronics"
        }
    },
    {
        $group:{
            _id:"category",
            totalRevenue:{
                $sum:{
                    $multiply:[
                        "$price",
                        "$quantity"
                    ]
                }
            }
        }
    }
])

db.agg.aggregate([
    {
        $group:{
            _id:"$category",
            mostExpensiveProduct:{
                $max:{
                    price:"$price",
                    product:"$product"
                }
            }
        }
    }
])
