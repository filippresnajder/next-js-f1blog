import Image from "next/image";
import Link from "next/link";

interface TrackData {
    props: {
        id: number,
        name: string,
        location: string,
        race_date: string,
        first_gp: number,
        laps: number,
        length: number,
        record: string,
        image: string,
        slug: string,
    }
}

const Track = ({props} : TrackData) => {
    return (
        <Link href={`/calendar/${props.slug}`}>
            <div className="w-[350px] border-2 border-gray-50 dark:border-gray-900 overflow-hidden font-formula">
                <Image
                    className="max-w-none h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    src={`/tracks/${props.image}`}
                    alt={props.slug}
                    width={350}
                    height={200}
                />
                <div className="bg-red-700 text-white p-2 relative z-10">
                    {props.name}
                </div>
            </div>
        </Link>
    );
}

export default Track