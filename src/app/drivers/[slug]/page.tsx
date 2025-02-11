import Drivers from "@/app/json/drivers.json";
import Image from "next/image";

const DriverView = async ({params} : {params : Promise<{slug : string}>}) => {
    const slug = (await params).slug;
    const driver = Drivers.drivers.find(d => d.slug === slug);

    if (!driver) {
        return (
            <div>
                <p>Invalid Driver</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center mt-20 md:mt-32 font-formula dark:text-white max-w-screen-lg mx-auto">
            <p className="text-center font-bold text-xl">{driver.name}</p>
            <div className="max-w-[400px] p-4 flex flex-col items-center">
                <div className="border-2 border-gray-200 dark:border-gray-900 w-auto">
                    <Image
                        src={`/drivers/${driver.image}`}
                        alt={driver.slug}
                        width={400}
                        height={250}
                    />
                    <div className="p-2">
                        <p>Nationality: {driver.nationality}</p>
                        <p>Team: {driver.team}</p>
                        <p>Starts: {driver.starts}</p>
                        <p>Championships: {driver.championships}</p>
                        <p>Wins: {driver.wins}</p>
                        <p>Podiums: {driver.podiums}</p>
                        <p>Poles: {driver.poles}</p>
                        <p>Points: {driver.points}</p>
                    </div>
                </div>
                <p className="mt-4">{driver.biography}</p>
            </div>
        </div>
    );
};

export default DriverView