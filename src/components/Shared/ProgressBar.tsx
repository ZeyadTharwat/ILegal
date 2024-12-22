const ProgressBar = ({
    clientName,
    percentage,
    progress,
    backgroundClass,
}: {
    clientName: string;
    percentage: string;
    progress: string;
    backgroundClass: string;
}) => {
    return (
        <div>
            <div className="flex justify-between mb-1 text-black">
                <h1 className="text-xl">{clientName}</h1>
                <p className="font-bold text-xl">{percentage} egp</p>
            </div>
            <div className="h-9 bg-[#D9D9D9] rounded w-full overflow-hidden">
                <div
                    className={`h-full rounded ${backgroundClass}`}
                    style={{ width: progress }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
