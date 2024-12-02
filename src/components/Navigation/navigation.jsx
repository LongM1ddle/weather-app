import { LeftTab1 } from "../LeftTab/leftTab1.jsx";
import { ActivitesTab } from "../ActivitiesTab/activitiesTab";
import { RightTab } from "../RightTab/rightTab";

export const Navigation = ({weatherData, setCityHandle}) => {
    return (
        <>
        {LeftTab1()}
        {ActivitesTab({setCityHandle})}
        {RightTab({weatherData, setCityHandle})}
        </>
    )
}