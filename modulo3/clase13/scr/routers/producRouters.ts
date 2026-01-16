import { Router, Request, Response} from "express";

let router=Router();
interface Product{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
}
let products:Product[]=[
    {id:1, title:`Teclado`, price:5000, description:`Un teclado clasico para escribir en cuelclier computadora`, category:`Tecnologia`, image:`https://fakestoreapi.com/img/1.jpg`},
    {id:2, title:`Pollera`, price:2000, description:`Polera jean con botones`, category:`Ropa`, image:`https://fakestoreapi.com/img/2.jpg`}
];

router.get("/", (req:Request, res:Response)=>{
    res.json(products);
});

router.get(`/:id`,(req:Request, res:Response)=>{
    let id=Number(req.params.id);
    let product=products.find(p=>p.id===id);

    if(!product){
        return res.status(404).json({message:`El producto no se encuentra`});
    }

    res.json(product);
});

router.post(`/`, (req:Request, res:Response)=>{
    let {title, price, description, category, image}=req.body as Omit<Product, "id">;

    if(!title||!price||!description||!category||!image){
        return res.status(400).json({message:"Error: todos los datos son obligatorios"});
    }

    let newProduct={
        id:products.length+1,
        title,
        price,
        description,
        category,
        image
    }

    products.push(newProduct);
    res.status(201).json(newProduct);
});

router.patch(`/:id`, (req:Request, res:Response)=>{
    let id=Number(req.params.id);
    let product=products.find(p=>p.id===id);

    if(!product){
        return res.status(404).json({message:"E producto no se encuentra"});
    }

    Object.assign(product, req.body);
    res.json(product);
});

router.delete("/:id", (req:Request, res:Response)=>{
    let id=Number(req.params.id);
    let index=products.findIndex(p=>p.id===id);

    if(index===-1){
        return res.status(404).json({message:"El producto no se encuentra"});
    }

    let deleted=products.splice(index, 1);
    res.json(deleted[0]);
});

export default router;