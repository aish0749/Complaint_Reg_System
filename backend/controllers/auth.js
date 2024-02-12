const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const db=mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE

});
exports.register=(req,res)=>{
    console.log(req.body);// to display the body of the req on the log

    // const name=req.body.name;
    // const email=req.body.email;
    // const password=req.body.password;
    // const passwordConfirm=req.body.passwordConfirm;
    const {name,email,password,passwordConfirm}=req.body;


    db.query('select email from user_login where email = ?',[email], async (error,results)=>{
        if(error){console.log(error);}
        if(results.length>0)
        {
            return res.render('signup',{
                message: 'Email already exists.'
            });
        }
        else if(password!==passwordConfirm)
        {
            return res.render('signup',{
                message: 'Passwords dont match!'
            });
        }

        let hashedPassword= await bcrypt.hash(password,8);
        console.log(hashedPassword);
        db.query('insert into user_login set ?',{name:name,email:email,password:hashedPassword},(error,results)=>{
            if(error)
            {
                console.log(error);
            }
            else
            {
                res.render('signup',{
                    message:'Registered Successfully.'
                });
            }
        });
    })

    

    // res.send("Form Submitted.")//to display content on the frontend is response(res) to the request(req) sent.

}

exports.login=async (req,res)=>{
    
    try 
    {
        const{email,password}=req.body;
        req.session.email=email;
        if(!email || !password)
        {
            return res.render('userlogin',{
                message:'Email or password field Missing.'
            })
        }
        db.query('select * from user_login where email= ?',[email],async (error,results)=>{
            if(results.length===0 || !(await bcrypt.compare(password,results[0].password)))
            {
                res.render('userlogin',{
                    message:'Incorrect Email or password.'
                });
            }
            else
            {
                // const id=results[0].id;
                res.render('userpage1');
            
            }
        });
        
    } catch (error) {
        console.log(error);
    }
    
}
exports.adminlogin=async (req,res)=>{

    try 
    {
        const{email,password}=req.body;
        if(!email || !password)
        {
            return res.render('adminlogin',{
                message:'Email or password field Missing.'
            })
        }
        db.query('select * from admin_login where email= ?',[email],async (error,results)=>{
            if(results.length===0 || !(await bcrypt.compare(password,results[0].password)))
            {
                res.render('adminlogin',{
                    message:'Incorrect Email or password.'
                });
            }
            else
            {
                // const id=results[0].id;
                db.query('select * from complaint',async(error,rows)=>{
                    if(error){console.log(error);}
                    else
                    {
                        res.render('admin_view',{rows});
                    }
                });
                
            
            }
        });
        
    } catch (error) {
        console.log(error);
    }
    
}
exports.complaint=async (req,res)=>{

    try 
    {
        const{address,complaint}=req.body;
        // if(!email || !address ||!complaint)
        // {
        //     return res.render('filecomplaint',{
        //         message:'Please enter all the details'
        //     })
        // }
        // db.query('select * from admin_login where email= ?',[email],async (error,results)=>{
        //     if(results.length===0 || !(await bcrypt.compare(password,results[0].password)))
        //     {
        //         res.render('adminlogin',{
        //             message:'Incorrect Email or password.'
        //         });
        //     }
        //     else
        //     {
        //         // const id=results[0].id;
        //         res.render('admin_view');
            
        //     }
        // });
        db.query('insert into complaint set ?',{user_email:req.session.email,address:address,complaint:complaint},(error,results)=>{
            if(error)
            {
                console.log(error);
            }
            else
            {
                res.render('filecomplaint',{
                    message:'Registered Successfully.'
                });
            }
        });
    } catch (error) {
        console.log(error);
    }
    
}

exports.history=async(req,res)=>{
    // const email=req.session.email;
    db.query('select user_email,address,complaint,status from complaint where user_email = ? ',[req.session.email],(err,rows)=>{
        if(err){console.log(err);}
        if(rows.length===0)
        {
            res.render('userpage1',{
                message:'No Complaint Exists !'
            })
        }
        else
        {
            res.render('complaint_history',{rows});
        }
    });   
}

exports.update=async(req,res)=>{
    const{cid,status}=req.body;
    db.query('update complaint set status= ? where complaint_id= ?',[status,cid],(err,rows)=>{
        if(err){console.log(err);}
        else
        {
            db.query('select * from complaint',async(error,rows)=>{
                if(error){console.log(error);}
                else
                {
                    res.render('admin_view',{rows});
                }
            });
            
        }
    })
}