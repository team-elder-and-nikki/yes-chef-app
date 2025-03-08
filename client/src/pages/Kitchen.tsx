import NavBar from "@/components/NavBar"

export default function Kitchen(){
    return(
        <>
            <NavBar />
            <div className="md:ml-21"/*bump everything to the right when NavBar is fixed to the left*/>
                <h1>Kitchen</h1>
            </div>
        </>
    )
}