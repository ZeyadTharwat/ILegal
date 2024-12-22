import BarChart from "../components/Home/BarChart"

const TenantsAnalysis = () => {
  return (
    <div className="rounded-[10px] px-16 py-20 bg-white col-span-3">
    <div className="pb-10  border-b-[3px] mb-10 border-[#C4C4C4D6] flex justify-between items-center">
      <h1 className="text-black font-bold text-[32px]">Tenants Analysis</h1>
    </div>
    <div className="space-y-9">
    <div className="bg-gradient-tenants py-12 px-14 rounded-[35px]">
      <div className="relative">
        <div className="flex items-center justify-between pb-7">
          <p className="text-2xl text-black">Tenant Name</p>
        </div>
        <div className="size-3 bg-gradient-blue rounded-full absolute -bottom-1 right-0" />
        <div className="w-full h-1 bg-gradient-blue2" />

      </div>
      <div className="mt-10 grid grid-cols-3 gap-20 min-h-[350px]">
        <div>
          <BarChart />
        </div>
        <div>
          <BarChart />
        </div>
        <div>
          <BarChart />
        </div>

      </div>
    </div>
    <div className="bg-gradient-tenants py-12 px-14 rounded-[35px]">
      <div className="relative">
        <div className="flex items-center justify-between pb-7">
          <p className="text-2xl text-black">Tenant Name</p>
        </div>
        <div className="size-3 bg-gradient-blue rounded-full absolute -bottom-1 right-0" />
        <div className="w-full h-1 bg-gradient-blue2" />

      </div>
      <div className="mt-10 grid grid-cols-3 gap-20 min-h-[350px]">
        <div>
          <BarChart />
        </div>
        <div>
          <BarChart />
        </div>
        <div>
          <BarChart />
        </div>

      </div>
    </div>

    <div className="bg-gradient-tenants py-12 px-14 rounded-[35px]">
      <div className="relative">
        <div className="flex items-center justify-between pb-7">
          <p className="text-2xl text-black">Tenant Name</p>
        </div>
        <div className="size-3 bg-gradient-blue rounded-full absolute -bottom-1 right-0" />
        <div className="w-full h-1 bg-gradient-blue2" />

      </div>
      <div className="mt-10 grid grid-cols-3 gap-20 min-h-[350px]">
        <div>
          <BarChart />
        </div>
        <div>
          <BarChart />
        </div>
        <div>
          <BarChart />
        </div>

      </div>
    </div>

    </div>
  </div>
  )
}

export default TenantsAnalysis