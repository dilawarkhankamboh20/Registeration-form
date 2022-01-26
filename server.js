const express= require("express")
const app = express();
const port= process.env.PORT || 3000
const path= require("path")
const ejs= require("ejs")




const viewPath= path.join(__dirname , "./templates/views")
const publicPath= path.join(__dirname , "./public")


app.set("view engine" , "ejs")
app.set("views" , viewPath)


app.use(express.static(publicPath))

app.get("/" , (req, res)=>{

    res.render("home")
})


app.get("/signup" , (req, res)=>{

    res.render("signup")
})

app.get("/login" , (req, res)=>{

    res.render("login")
})




app.listen(port, ()=>{

    console.log(`listing to the port on ${port}`);
})