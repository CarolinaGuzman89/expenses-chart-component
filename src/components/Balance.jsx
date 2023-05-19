

export default function Balance() {
    return (
        <div className="rounded-lg w-full balance p-5 grid grid-cols-2  ">
            <div className=" ">
                <p className="text-sm">My Balance</p>
                <p className="font-bold text-xl">$921.48</p>
            </div>
            <img 
                src="../images/logo.svg" 
                className="justify-self-end"
            />
        </div>
    )
}
