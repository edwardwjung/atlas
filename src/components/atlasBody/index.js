import { AlignHorizontalCenter } from "@mui/icons-material";
import React from "react";
import {AtlasBodyHeader, AtlasBodyContent, AtlasBodyTags} from "../../components";

const AtlasBody = ({title, labels, description }) => {
    return <React.Fragment>
        <AtlasBodyHeader title={title}/>
        <AtlasBodyContent description={description}/>
        <AtlasBodyTags text={labels} /> 
    </React.Fragment>
}

export default AtlasBody;