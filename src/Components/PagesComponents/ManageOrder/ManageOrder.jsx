"use client";

import { Pagination, Table } from "flowbite-react";
import { useState } from "react";

const ManageOrder = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="px-6">
      {/* table */}
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell className="order_title">Order ID</Table.HeadCell>
            <Table.HeadCell className="order_title">Service</Table.HeadCell>
            <Table.HeadCell className="order_title">Order Date</Table.HeadCell>
            <Table.HeadCell className="order_title">Price</Table.HeadCell>
            <Table.HeadCell className="order_title">Status</Table.HeadCell>
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
                Logo Design
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
                $760
              </Table.Cell>
              <Table.Cell>
                <button className="bg-[#FF8F5A] text-[14px] text-[#fff] font-[600] px-4 py-2 rounded-md">
                  In Progress
                </button>
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
                Logo Design
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
                $760
              </Table.Cell>
              <Table.Cell>
                <button className="bg-[#00C1C1] text-[14px] text-[#fff] font-[600] px-4 py-2 rounded-md">
                  DELIVERED
                </button>
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
                Logo Design
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
                $760
              </Table.Cell>
              <Table.Cell>
                <button className="bg-[#FED500] text-[14px] text-[#fff] font-[600] px-4 py-2 rounded-md">
                  REVISION
                </button>
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
                Logo Design
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
                $760
              </Table.Cell>
              <Table.Cell>
                <button className="bg-[#1DBF73] text-[14px] text-[#fff] font-[600] px-4 py-2 rounded-md">
                  COMPLETED
                </button>
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
                Logo Design
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
                $760
              </Table.Cell>
              <Table.Cell>
                <button className="bg-[#FF213C] text-[14px] text-[#fff] font-[600] px-4 py-2 rounded-md">
                  CANCELLED
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      {/* pagination */}
      <div className="bg-[#fff] flex overflow-x-auto sm:justify-center py-5 md:py-10 ">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default ManageOrder;
