import { Link } from "react-router-dom"
import Table from "../Shared/Table"

const BillsAndTenants = () => {
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
      ];
    
  return (
    <div className="grid grid-cols-5 gap-8 mb-20">
    <div className="rounded-[10px] px-10 py-20 bg-white col-span-2">
      <div className="pb-10  border-b-[3px] mb-11 border-[#C4C4C4D6] flex justify-between items-center">
      <h1 className="text-black font-bold text-[32px]">Bills and Invoices</h1>
      <Link className="underline font-medium text-navy" to={''}>
      See all
      </Link>
      </div>
      <div className="space-y-5">
      <div>
        <div className="flex justify-between mb-1 text-black">
        <h1 className="text-xl">Client A</h1>
        <p className="font-bold text-xl">700/1000 egp</p>
        </div>
        <div className="h-9 bg-[#D9D9D9] rounded w-full overflow-hidden">
          <div className="bg-gradient-blue2 h-full rounded" style={{width:'70%'}}/>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-1 text-black">
        <h1 className="text-xl">Client B</h1>
        <p className="font-bold text-xl">500/1600 egp</p>
        </div>
        <div className="h-9 bg-[#D9D9D9] rounded w-full overflow-hidden">
          <div className="bg-gradient-red h-full rounded" style={{width:'31.5%'}}/>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-1 text-black">
        <h1 className="text-xl">Client A</h1>
        <p className="font-bold text-xl">700/1000 egp</p>
        </div>
        <div className="h-9 bg-[#D9D9D9] rounded w-full overflow-hidden">
          <div className="bg-gradient-blue2 h-full rounded" style={{width:'70%'}}/>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-1 text-black">
        <h1 className="text-xl">Client B</h1>
        <p className="font-bold text-xl">500/1600 egp</p>
        </div>
        <div className="h-9 bg-[#D9D9D9] rounded w-full overflow-hidden">
          <div className="bg-gradient-red h-full rounded" style={{width:'31.5%'}}/>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-1 text-black">
        <h1 className="text-xl">Client A</h1>
        <p className="font-bold text-xl">700/1000 egp</p>
        </div>
        <div className="h-9 bg-[#D9D9D9] rounded w-full overflow-hidden">
          <div className="bg-gradient-blue2 h-full rounded" style={{width:'70%'}}/>
        </div>
      </div>

      </div>

    </div>
    <div className="rounded-[10px] px-10 py-20 bg-white col-span-3">
    <div className="pb-10  border-b-[3px] mb-4 border-[#C4C4C4D6] flex justify-between items-center">
      <h1 className="text-black font-bold text-[32px]">Bills and Invoices</h1>
      <Link className="underline font-medium text-navy" to={''}>
      See all
      </Link>
      </div>
        <div className="px-10">
        <Table columns={columns} data={data} />
        </div>
    </div>
  </div>
)
}

export default BillsAndTenants