import BatsmanStatTable from './BatsmanStatTable';
import BowlerStatTable from './BowlerStatTable';


const AllRounderStatTable = ({ allrounders }) => {
    return (
        <>
            <BatsmanStatTable batsmen={allrounders} />
            <BowlerStatTable bowlers={allrounders} />
        </>


    )


}
export default AllRounderStatTable
