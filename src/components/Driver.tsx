import Image from "next/image";
import Link from "next/link";

interface DriverData {
    props: {
        id: number,
        name: string,
        image: string,
        slug: string,
        number: number,
    }
}

const Driver = ({props} : DriverData) => {
    return (
        <Link href={`/drivers/${props.slug}`}>
            <div className="w-[235px] h-auto border-2 border-gray-50 dark:border-gray-900 overflow-hidden font-formula text-sm text-center">
                <Image
                    className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    src={`/drivers/${props.image}`}
                    alt={props.slug}
                    width={235}
                    height={0}
                />
                <div className="bg-red-700 text-white p-2 relative z-10">
                    {props.name} #{props.number}
                </div>
            </div>
        </Link>
    );
}

export default Driver