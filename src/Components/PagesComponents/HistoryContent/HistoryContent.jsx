"use client";

import { Pagination, Table } from "flowbite-react";
import { useState } from "react";

const HistoryContent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="px-6">
      {/* table */}
      <div className="overflow-x-auto">
        <Table hoverable className="cursor-pointer">
          <Table.Head>
            <Table.HeadCell className="order_title">ID</Table.HeadCell>
            <Table.HeadCell className="order_title">
              History Details
            </Table.HeadCell>
            <Table.HeadCell className="order_title">Date</Table.HeadCell>
            <Table.HeadCell className="order_title">Time</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[600]"
              >
                JUN120322
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                Payment is successful,Transaction id: #3239994
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                June 13, 2023
              </Table.Cell>
              <Table.Cell
                className="text-[#3371F2] text-[16px] font-Roboto 
              font-[600] "
              >
                10.00 AM
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[600]"
              >
                JUN120322
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                Payment is successful,Transaction id: #3239994
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                June 13, 2023
              </Table.Cell>
              <Table.Cell
                className="text-[#3371F2] text-[16px] font-Roboto 
              font-[600] "
              >
                10.00 AM
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[600]"
              >
                JUN120322
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                Payment is successful,Transaction id: #3239994
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                June 13, 2023
              </Table.Cell>
              <Table.Cell
                className="text-[#3371F2] text-[16px] font-Roboto 
              font-[600] "
              >
                10.00 AM
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[600]"
              >
                JUN120322
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                Payment is successful,Transaction id: #3239994
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                June 13, 2023
              </Table.Cell>
              <Table.Cell
                className="text-[#3371F2] text-[16px] font-Roboto 
              font-[600] "
              >
                10.00 AM
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[600]"
              >
                JUN120322
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                Payment is successful,Transaction id: #3239994
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                June 13, 2023
              </Table.Cell>
              <Table.Cell
                className="text-[#3371F2] text-[16px] font-Roboto 
              font-[600] "
              >
                10.00 AM
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default HistoryContent;
