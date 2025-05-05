import { Table } from "antd";
import { useState } from "react";

const nullfunc = () => null;

const Tabelinha = ({
  tableData,
  columns,
  startingTableColumns,
  onEdit,
  footerButton = nullfunc,
  inheritedSetSelectedRowKeys = null,
  disableSelection = () => false,
  rowSelectionOff = false,
  auxiliarColumn = [],
  onRowClick = () => {}
}) => {
  const [visibleColumns] = useState(
    columns.map((col) => col.dataIndex || col.key).filter((col) => startingTableColumns.includes(col))
  );  
  
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
    if (inheritedSetSelectedRowKeys) {
      inheritedSetSelectedRowKeys(newSelectedRowKeys);
    }
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: (record) => ({
      disabled: disableSelection(record),
    }),
  };

  const updatedColumns = columns.map((col) => {
    if (col.dataIndex === "acoes") {
      return {
        ...col,
        render: (_, record) => col.render(_, record, onEdit),
      };
    }
    return col;
  });

  const filteredColumns = updatedColumns.filter(
    (col) =>
      visibleColumns.includes(col.dataIndex || col.key)
  );
  

  return (
    <Table
      onRow={(record) => ({
        onClick: () => onRowClick(record),
      })}
      footer={footerButton(selectedRowKeys)}
      columns={auxiliarColumn.concat(filteredColumns)}
      dataSource={tableData}
      rowSelection={rowSelectionOff ? false : rowSelection}
      showSorterTooltip={{ target: "sorter-icon" }}
      loading={tableData === null}
      rowKey={(record) => record.id}
    />
  );
};

export default Tabelinha;