import React from 'react'
import './Table.scss'
import organizeData from '../../utils/organizeDataForTable'
import Button from '../Button'

export interface TableHeader {
  key: string
  value: string
  right?: boolean
}
declare interface TableProps {
  headers: TableHeader[]
  data: any[]

  enableActions?: boolean

  onDelete?: (item: any) => void
  onDetail?: (item: any) => void
  onEdit?: (item: any) => void
}

const Table: React.FC<TableProps> = (props) => {
  const [organizedData, indexedHeaders] = organizeData(props.data, props.headers)

  return <table className="AppTable">
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
        organizedData.map((row, i) => {
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
                  <Button onClick={() => props.onEdit && props.onEdit(row)}>
                    editar
                  </Button>
                }
                {
                  props.onEdit &&
                  <Button onClick={() => props.onDelete && props.onDelete(row)}>
                    deletar
                  </Button>
                }
                {
                  props.onEdit &&
                  <Button onClick={() => props.onDetail && props.onDetail(row)}>
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
}

export default Table