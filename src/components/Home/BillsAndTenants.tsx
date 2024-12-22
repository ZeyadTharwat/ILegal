import { Link } from "react-router-dom"
import Table from "../Shared/Table"
import ProgressBar from "../Shared/ProgressBar";
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
  const billsData = [
    { clientName: 'Client B', percentage: '500/1600', progress: '31.5%' },
    { clientName: 'Client A', percentage: '700/1000', progress: '70%' },
    { clientName: 'Client B', percentage: '500/1600', progress: '31.5%' },
    { clientName: 'Client A', percentage: '700/1000', progress: '70%' },
    { clientName: 'Client B', percentage: '500/1600', progress: '31.5%' },];

  return (
    <div className="grid grid-cols-5 gap-8 mb-20">
      <div className="rounded-[10px] px-10 py-20 bg-white col-span-2">
        <div className="pb-10  border-b-[3px] mb-11 border-[#C4C4C4D6] flex justify-between items-center">
          <h1 className="text-black font-bold text-[32px]">Bills and Invoices</h1>
          <Link className="underline font-medium text-navy" to={'/dashboard/bills/all'}>
            See all
          </Link>
        </div>
        <div className="space-y-5">
          {billsData.map((bill, index) => (
            <ProgressBar
              key={index}
              clientName={bill.clientName}
              percentage={bill.percentage}
              progress={bill.progress}
              backgroundClass={index % 2 === 0 ? 'bg-gradient-red' : 'bg-gradient-blue2'}
            />
          ))}

        </div>

      </div>
      <div className="rounded-[10px] px-10 py-20 bg-white col-span-3">
        <div className="pb-10  border-b-[3px] mb-4 border-[#C4C4C4D6] flex justify-between items-center">
          <h1 className="text-black font-bold text-[32px]">Most Recent</h1>
          <Link className="underline font-medium text-navy" to={'/dashboard/tenants/all'}>
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