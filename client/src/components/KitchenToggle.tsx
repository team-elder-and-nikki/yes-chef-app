import CategoryNav from "./ui/CategoryNav"

export default function KitchenToggle(){
    return(
        <>
            <CategoryNav onCategoryChange={() => {}} categories={["Open Tickets", "Open Dishes"]}/>
        </>
    )
}