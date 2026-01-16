import { Router, Request, Response} from "express";

let router=Router();
interface User{
    id:number,
    name:string,
    email:string
}

let users:User[]=[
    {id:1, name:`Kevin`, email:`kevin@gmail.com`},
    {id:2, name:`Claudio`, email:`claudio@gmail.com`},
    {id:3, name:`Candela`, email:`candela@gmail.com`}
];

router.get(`/`, (req:Request, res:Response)=>{
    res.json(users);
});

router.get("/:id", (req,res)=>{
    let id=Number(req.params.id);
    let user=users.find(u=>u.id===id);

    if(!user){
        return res.status(404).json({message:`El ussuario no se encuentra`});
    }

    res.json(user);
});

export default router