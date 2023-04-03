import React, { Component } from 'react'
import coolers from './Coolers.png'
import boots from './Boots.png'
const Highordcomp=[{
  productname:"Coolers glass",
  price:"1000",
  imageURL:coolers
},
{
    productname:"Boots",
    price:"2000",
    imageURL:boots
}
]
const nameslist=Highordcomp.map((nameswe,i)=><li key={i}>{nameswe.productname} with{nameswe.price}</li>)
const nameslist1=Highordcomp.map((namesw,il)=><img key={il} src={namesw.imageURL}alt=""></img>)
export class Hoc extends Component {
  render() {
    return (
      <div>
        {nameslist}
        {nameslist1}
      </div>
    )
  }
}

export default Hoc