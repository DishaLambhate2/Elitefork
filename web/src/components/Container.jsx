import React,{ useEffect, useState } from "react"
import "../css/card.css"
import Card from "./Card"

const Container = ()=>{
            
            const[data,setData]= useState([])
            useEffect(()=>{
                  fetch("https://dummyjson.com/recipes").then((res)=>{
                        res.json().then((data)=>{
                              console.log(data.recipes)
                              setData(data.recipes)
                            })
                        })
            },[])
            
            return(
                <div className="container">
                 {data.map((recipes)=>{
                    return <Card image={recipes.image} name={recipes.name} cuisine={recipes.cuisine} rating={recipes.rating}/>
                 })}
                </div>
             )
}
export default Container;