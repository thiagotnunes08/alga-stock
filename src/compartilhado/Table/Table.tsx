
import React from 'react'
import './Table.scss'
import organizeData from '../../utils/organizeDataForTable'
import Button from '../Button'
import { NavLink, useLocation } from 'react-router-dom'

import  {parse}  from 'query-string'
import paginate from '../../utils/paginate'

export interface TableHeader {
  key: string
  value: string
  right?: boolean
}
declare interface TableProps {
  headers: TableHeader[]
  data: any[]
  itensPerPage?:number 
  enableActions?: boolean

  onDelete?: (item: any) => void
  onDetail?: (item: any) => void
  onEdit?: (item: any) => void
}

const Table: React.FC<TableProps> = (props) => {

  const location = useLocation()
  const [organizedData, indexedHeaders] = organizeData(props.data, props.headers)
  const page = parseInt(parse(location.search).page as string) || 1
  const itensPerPage = props.itensPerPage || 5
  const paginatedData = paginate(organizedData,itensPerPage,page)
  const totalPage = Math.ceil(organizedData.length / itensPerPage)
  
  return <>
  <table className="AppTable">
    <thead>
      <tr>
        {
          props.headers.map(header =>
            <th
              className={header.right ? 'right' : ''}
              key={header.key}
            >
              {header.value}
            </th>
          )
        }
        {

          props.enableActions
          && <th className='right'>
            ações
          </th>

        }
      </tr>
    </thead>
    <tbody>
      {
        paginatedData.map((row, i) => {
          return <tr key={i}>
            {
              Object
                .keys(row)
                .map((item, i) =>
                  item !== '$original'
                    ? <td
                      key={row.$original.id + i}
                      className={indexedHeaders[item].right ? 'right' : ''}
                    >
                      {row[item]}
                    </td>
                    : null
                )
            }
            {
              props.enableActions
              && <td className="actions right">
                {
                  props.onEdit &&
                  <Button onClick={() => props.onEdit && props.onEdit(row.$original)}>
                    editar
                  </Button>
                }
                {
                  props.onEdit &&
                  <Button onClick={() => props.onDelete && props.onDelete(row.$original)}>
                    deletar
                  </Button>
                }
                {
                  props.onEdit &&
                  <Button onClick={() => props.onDetail && props.onDetail(row.$original)}>
                    detalhar
                  </Button>
                }
              </td>
            }
          </tr>
        })
      }
    </tbody>
  </table>
  <div className="Table__pagination">
      {
        Array(totalPage)
          .fill('')
          .map((_, i) => {
            return <NavLink
              key={i}
              className={() => page === i + 1 ? "selected" : ""}
              to={`/products?page=${i + 1}`}>
              { i + 1 }
            </NavLink>
          })
      }
    </div>
  </>
}

export default Table