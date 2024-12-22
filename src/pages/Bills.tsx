import ProgressBar from "../components/Shared/ProgressBar";
const Bills = () => {
    const billsData = [
        { clientName: 'Client B', percentage: '500/1600', progress: '31.5%' },
        { clientName: 'Client A', percentage: '700/1000', progress: '70%' },
        { clientName: 'Client B', percentage: '500/1600', progress: '31.5%' },
        { clientName: 'Client A', percentage: '700/1000', progress: '70%' },
        { clientName: 'Client B', percentage: '500/1600', progress: '31.5%' },
        { clientName: 'Client A', percentage: '700/1000', progress: '70%' },
        { clientName: 'Client A', percentage: '700/1000', progress: '70%' },
        { clientName: 'Client B', percentage: '500/1600', progress: '31.5%' },
    ];

    return (
        <div>
            <div className="rounded-[10px] px-10 py-20 bg-white col-span-2">
                <div className="pb-10 border-b-[3px] mb-11 border-[#C4C4C4D6] flex justify-between items-center">
                    <h1 className="text-black font-bold text-[32px]">Bills and Invoices</h1>
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
        </div>
    );
};

export default Bills;
