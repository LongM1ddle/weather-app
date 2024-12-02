import { LeftTab } from "../leftTab/leftTab";
import { ActivitesTab } from "../ActivitiesTab/activitiesTab";
import { RightTab } from "../RightTab/rightTab";

export const Navigation = ({weatherData, setCityHandle}) => {
    return (
        <>
        {LeftTab()}
        {ActivitesTab({setCityHandle})}
        {RightTab({weatherData, setCityHandle})}
        </>
    )
}