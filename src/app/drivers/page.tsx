import Drivers from "@/app/json/drivers.json";
import Driver from "@/components/Driver";

interface DriverData {
    id: number,
    name: string,
    image: string,
    slug: string,
    number: number,
}
export default function Page() {
    const drivers: Array<DriverData> = Drivers.drivers;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 place-items-center max-w-screen-lg mx-auto gap-y-10 mt-20 md:mt-32">
            {drivers.map(d =>
                <Driver key={d.id} props={d}/>
            )}
        </div>
    );
}