import Table from "../components/Shared/Table"

const Tenants = () => {
    const columns = [
        { header: 'Name', accessor: 'name' },
        { header: 'Type', accessor: 'type' },
        { header: 'Date', accessor: 'date' },
      ];
    
      const data = [
        { name: 'Tenant Name', type: 'Administration', date: 'Date' },
        { name: 'Service Name', type: 'Document', date: 'Date' },
        { name: 'Document Name', type: 'Document', date: 'Date' },
        { name: 'Template Name', type: 'Administration', date: 'Date' },
        { name: 'Service Name', type: 'Document', date: 'Date' },
        { name: 'Document Name', type: 'Document', date: 'Date' },
        { name: 'Template Name', type: 'Administration', date: 'Date' },

      ];
    
  return (
    <div className="rounded-[10px] px-10 py-20 bg-white col-span-3">
    <div className="pb-10  border-b-[3px] mb-4 border-[#C4C4C4D6] flex justify-between items-center">
      <h1 className="text-black font-bold text-[32px]">Most Recent</h1>
    </div>
    <div className="px-10">
      <Table columns={columns} data={data} />
    </div>
  </div>
)
}

export default Tenants