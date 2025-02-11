import Image from "next/image";

interface TeamData {
    props: {
        id: number,
        name: string,
        base: string,
        starts: number,
        championships: number,
        wins: number,
        poles: number,
        podiums: number,
        points: number,
        ly_pos: string,
        image: string,
        slug: string
    }
}
const Team = ({props} : TeamData) => {
    return (
        <div className="w-[300px] border-2 border-gray-50 dark:border-gray-900 overflow-hidden font-formula">
            <p className="w-full bg-red-700 text-white text-center p-2">{props.name}</p>
            <div className="overflow-hidden">
                <Image
                    className="max-w-none h-[250px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    src={`/teams/${props.image}`}
                    alt={props.slug}
                    width={300}
                    height={250}
                />
            </div>
            <div className="p-2 dark:text-white">
                <p>Based in: {props.base}</p>
                <p>Starts: {props.starts}</p>
                <p>Championships: {props.championships}</p>
                <p>Wins: {props.wins}</p>
                <p>Poles: {props.poles}</p>
                <p>Podiums: {props.podiums}</p>
                <p>Points: {props.points}</p>
                <p>2024 Standings: {props.ly_pos}</p>
            </div>
        </div>
    )
}

export default Team