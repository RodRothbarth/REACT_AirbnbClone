import React from 'react'
import star from '../../public/Assets/Images/Star.png'

export default function Cards(props: any){
    let badgeText: string = "";
    if(props.openSpots === 0){
        badgeText = "SOLD OUT";
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/Assets/Images/${props.coverImg}`} className="card--img"/>
            <div className="card--classify">
                <img src={star} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •</span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">
                {props.title}
            </p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}
