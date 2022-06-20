import React from 'react'
import Badge from './Badge'

const TableRow = ({policy}:any) => {
  return (
    <tr className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {`${policy?.customer?.firstName} ${policy?.customer?.lastName}`}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  `${policy?.provider}`
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  `${policy?.insuranceType}`
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <Badge status="ACTIVE" />
                </td>
              </tr>
  )
}

export default TableRow