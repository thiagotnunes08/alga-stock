import React from 'react'
import './Table.scss'
import Products from './Table.mockdata'
import { type } from 'os'

const headers:TableHeader[] = [
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price' },
  { key: 'actions', value: 'Actions' },
  { key: 'stock', value: 'Available Stock'},
]

declare interface TableHeader {
  key:string
  value:string
  right?:boolean
}

type IndexedHeaders = {
  [key: string] : TableHeader
}

type OrganizeData = {
  [key: string] : any
}

function organizeData (data:any[],headers: TableHeader[]) {
  const indexedHeaders : IndexedHeaders = {}

  headers.forEach(header =>  {

    indexedHeaders[header.key] = {
      ...header
    }

   const headerKeysInOrder = Object.keys(indexedHeaders)

    const organizedData = data.map(item =>{

      const organizeItem:OrganizeData = {}

      headerKeysInOrder.forEach(key => {

        organizeItem[key] = item[key]
      })

      return organizeItem

    })
  
  })
  
  return[organizeData, indexedHeaders]
}



const Table = () => {

  const [organizedData,indexedHeaders] = organizeData(Products,headers)
  console.table(organizedData)
  console.table(indexedHeaders)


  return <table className="AppTable">
    <thead>
      <tr>
        {
          headers.map(header => <th className={header.right ? "right" : "" } 
          key={header.key}
          
          >
            
            {header.value}
            
            
            </th>)
        }
      </tr>
    </thead>
    <tbody>
      {
       
        

      }
    </tbody>
  </table>
}

export default Table