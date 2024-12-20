import Product from "../models/productModels.js"
export const searchProduct=async (req,res)=>{
    try {
        let {searchTerm,warranty,limit,page}=req.query;
        const skip=(limit*page)-limit;
        // if(searchTerm.trim()===""){
        //     return res.status(400).json({
        //         success:false,
        //         message:"searchTerm is required"

        //     })
        // }
    //    const products=await Product.find({
        
    //     $or:[
    //         {
    //             name:{
    //                 $regex:searchTerm,
    //                 $options:'i'
    //             },
                

    //         },
    //         {
    //             description:{
    //                 $regex:searchTerm,
    //                 $options:"i"
    //             }
    //         },
    //         {
    //             brand:{
    //                 $regex:searchTerm,
    //                 $options:"i"
    //             }
    //         },
    //         {
    //             price:{
    //                 $regex:searchTerm,
    //                 $options:"i"
    //             }
    //         }
            
    //     ],
    //     

    //     
    //    })
    
    searchTerm=searchTerm?searchTerm:""
    const query={
        $or:[
            {
                          name:{
                                $regex:searchTerm,
                                $options:'i'
                            },
                            
            
                        },
                        {
                            description:{
                                $regex:searchTerm,
                                $options:"i"
                            }
                        },
                        // {
                        //     brand:{
                        //         $regex:searchTerm,
                        //         $options:"i"
                        //     }
                        // },
                        

        ]
    }
    if(warranty==='true'){
        query.warranty="true"

        // query.warranty=warranty=="true"
    }
    const total = await Product.countDocuments();
    const products=await Product.find(query).skip(skip).limit(limit);
    //anju 10 data
// per page 2 data
//limit=2;
//skip=page*limit-limit
//[1,2,3,4,5,6,7,8,9]

    
       res.status(200).json({
        success:true,
        message:"Successfully fetched",
        totalItems:total, 
        totalPages:Math.ceil(total/limit),
        currentPage:page,
        products
       })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error",
            error:error.message
        })
        
    }
}