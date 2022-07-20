import React from 'react'
import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={75} text={"75%"} strokeWidth={5} />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">12,457</p>
                <p className="desc">Previous transactions processing. Last patments may not be included.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Today</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize='small' />
                            <div className="resultAmount">12,457</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small' />
                            <div className="resultAmount">99,576</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small' />
                            <div className="resultAmount">28,10,243</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;