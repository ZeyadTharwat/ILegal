import DocumentsIcon from "../Icons/DocumentsIcon";
import TemplateIcon from "../Icons/TemplateIcon";
import TenantsIcon from "../Icons/TenantsIcon";

const Insights = () => {
    const data = [
        { title: "Tenants", count: 10, Icon: TenantsIcon },
        { title: "Templates", count: 6, Icon: TemplateIcon },
        { title: "Documents", count: 15, Icon: DocumentsIcon },
      ];
    
  return (
    <div className="grid grid-cols-3 gap-10 mb-20">
    {data.map(({ title, count, Icon }, index) => (
      <div key={index} className="px-7 py-10 bg-white rounded-[35px] shadow-panel h-[323px] relative">
        <div className="flex items-center justify-between pb-7 border-b-4 border-navy relative">
          <p className="text-2xl text-navy">{title}</p>
          <Icon className="text-navy" />
          <div className="size-3 bg-gradient-blue rounded-full absolute bottom-0 translate-y-1/2 right-0" />
        </div>
        <h1 className="absolute top-2/3 -translate-y-2/3 left-1/2 -translate-x-1/2 text-navy font-semibold text-5xl">{count}</h1>
      </div>
    ))}
  </div>
)
}

export default Insights